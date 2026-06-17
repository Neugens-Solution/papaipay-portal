# Papaipay Database Schema v1

> **Legacy / superseded notice:** This document is retained for historical reference only. The current approved objective is a mock-data UI prototype only; no database implementation is in scope.


## Overview

This document defines the database direction for Papaipay and is aligned with `docs/product-blueprint-v2.md`.

Papaipay has two products:

1. Corporate Website
2. Asset Participation Platform

The schema direction supports:

- User Authentication
- Member Management
- Admin Management
- eKYC status tracking through a planned third-party integration
- Auction property asset opportunities
- Member-selected participation
- Multiple contributions and topups
- Payment Gateway tracking as a core planned module
- Reporting
- Activity Logging
- Corporate Website content needs

Older concepts such as advisor-first workflows, advisory case management, and financial assessment-led onboarding are not primary V2 schema drivers.

---

# users

Purpose:

System authentication and role management.

Fields:

- id (UUID, Primary Key)
- email
- role
- status
- created_at
- updated_at

Roles:

- member
- admin

---

# members

Purpose:

Store member profile information for the Asset Participation Platform.

Fields:

- id (UUID, Primary Key)
- user_id (UUID, FK → users.id)
- full_name
- ic_number
- phone
- email
- address
- occupation
- status
- ekyc_status
- created_at
- updated_at

Status:

- new
- profile_pending
- ekyc_pending
- active
- suspended
- closed

---

# admins

Purpose:

Store admin profile information.

Fields:

- id (UUID, Primary Key)
- user_id (UUID, FK → users.id)
- full_name
- phone
- email
- status
- created_at
- updated_at

---

# ekyc_verifications

Purpose:

Track eKYC verification records from a planned third-party eKYC provider.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- provider_name
- provider_reference_id
- status
- submitted_at
- verified_at
- rejected_at
- response_metadata
- created_at
- updated_at

Status:

- not_started
- pending
- verified
- rejected
- expired
- manual_review

---

# assets

Purpose:

Store auction property opportunity information.

Fields:

- id (UUID, Primary Key)
- title
- property_type
- location
- auction_price
- market_value
- description
- participation_status
- minimum_contribution
- maximum_contribution
- allow_topup
- status
- created_at
- updated_at

Status:

- draft
- open
- fully_subscribed
- closed
- cancelled

---

# member_asset_participations

Purpose:

Link members to asset opportunities they choose to participate in.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- asset_id (UUID, FK → assets.id)
- status
- total_contributed_amount
- first_contributed_at
- last_contributed_at
- created_at
- updated_at

Status:

- pending_payment
- active
- completed
- cancelled
- refunded

---

# contributions

Purpose:

Track member contributions and topups for selected asset opportunities.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- asset_id (UUID, FK → assets.id)
- participation_id (UUID, FK → member_asset_participations.id)
- contribution_type
- amount
- payment_method
- payment_status
- gateway_transaction_id
- reference_no
- receipt_url
- status
- created_at
- updated_at

Contribution Types:

- initial
- additional
- topup

Status:

- pending
- paid
- verified
- failed
- cancelled
- refunded

---

# payment_transactions

Purpose:

Track payment gateway transactions and reconciliation for contributions.

Fields:

- id (UUID, Primary Key)
- contribution_id (UUID, FK → contributions.id)
- member_id (UUID, FK → members.id)
- gateway_provider
- gateway_reference
- amount
- currency
- status
- paid_at
- failed_at
- raw_response
- created_at
- updated_at

Status:

- initiated
- pending
- successful
- failed
- cancelled
- refunded
- requires_review

---

# reports

Purpose:

Store generated report metadata for member and admin reporting.

Fields:

- id (UUID, Primary Key)
- report_type
- generated_by (UUID, FK → users.id)
- file_url
- filters
- status
- created_at

Report Types:

- member_contributions
- asset_participation
- payment_gateway
- ekyc_status
- operational_activity

---

# documents

Purpose:

Store uploaded member documents when needed for profile, eKYC support, contribution records, or compliance evidence.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- document_type
- file_url
- status
- uploaded_at
- verified_at

Document Types:

- ic
- proof_of_address
- payment_receipt
- ekyc_supporting_document
- other

Status:

- pending
- verified
- rejected

---

# consents

Purpose:

Store member consent, declarations, and authorization records.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- consent_type
- consent_text
- signed_by
- ip_address
- signed_at
- document_url

Consent Types:

- pdpa
- platform_terms
- payment_authorization
- declaration
- other

---

# notifications

Purpose:

Store system notifications.

Fields:

- id (UUID, Primary Key)
- user_id (UUID, FK → users.id)
- title
- message
- status
- created_at

Status:

- unread
- read

---

# activity_logs

Purpose:

Store audit trail and activity history.

Fields:

- id (UUID, Primary Key)
- user_id (UUID, FK → users.id)
- action
- entity
- entity_id
- description
- created_at

Examples:

- Member completed profile
- Member submitted eKYC
- Member selected asset opportunity
- Member made contribution
- Member added topup
- Payment gateway transaction updated
- Admin updated asset opportunity
- Admin reviewed payment exception

---

# corporate_content

Purpose:

Reserve content records for Corporate Website sections.

Fields:

- id (UUID, Primary Key)
- content_type
- slug
- title
- body
- status
- published_at
- created_at
- updated_at

Content Types:

- page
- faq
- team_member
- staff_profile
- career
- privacy_policy
- terms_and_conditions

---

# Reserved Future Tables

The following future-ready areas are reserved but not considered MVP-complete without separate approval:

## profit_distributions

Reserved for future profit distribution records.

## rental_distributions

Reserved for future rental distribution records.

## commission_management

Reserved for future commission management records.

---

# Relationships

users
├── members
├── admins
├── notifications
└── activity_logs

members
├── ekyc_verifications
├── documents
├── consents
├── member_asset_participations
├── contributions
└── payment_transactions

assets
├── member_asset_participations
└── contributions

member_asset_participations
└── contributions

contributions
└── payment_transactions

users
└── reports
