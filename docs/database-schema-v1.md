# Papaipay Database Schema v1

## Overview

This document defines the initial database structure for Papaipay MVP.

The schema is designed to support:

- User Authentication
- Member Management
- Advisor Management
- Financial Assessment
- Document Management
- Advisory Case Management
- Consent Management
- Communication Tracking
- Asset Management
- Contribution Tracking
- Activity Logging
- Notification Tracking

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
- advisor
- admin

---

# members

Purpose:

Store member profile information.

Fields:

- id (UUID, Primary Key)
- user_id (UUID, FK → users.id)
- full_name
- ic_number
- phone
- email
- address
- occupation
- monthly_income
- monthly_commitment
- status
- advisor_id (UUID, FK → advisors.id)
- created_at
- updated_at

Status:

- new
- assessment_pending
- under_review
- approved
- rejected
- completed

---

# advisors

Purpose:

Store advisor / sales consultant information.

Fields:

- id (UUID, Primary Key)
- user_id (UUID, FK → users.id)
- full_name
- phone
- email
- status
- created_at

---

# assessments

Purpose:

Store financial assessment data.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- monthly_income
- other_income
- car_loan_balance
- personal_loan_balance
- credit_card_balance
- total_commitment
- dsr_percentage
- net_disposable_income
- remarks
- status
- submitted_at
- reviewed_at

Status:

- draft
- submitted
- approved
- rejected

---

# documents

Purpose:

Store uploaded member documents.

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
- payslip
- bank_statement
- epf
- ccris
- other

Status:

- pending
- verified
- rejected

---

# cases

Purpose:

Store advisory cases assigned to members.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- advisor_id (UUID, FK → advisors.id)
- case_reference
- case_type
- status
- recommendation
- remarks
- created_at
- updated_at

Status:

- open
- under_review
- recommendation_prepared
- awaiting_member
- completed
- cancelled

---

# consents

Purpose:

Store member consent and authorization records.

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
- advisory_authorization
- declaration
- other

---

# communications

Purpose:

Store communication history with members.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- advisor_id (UUID, FK → advisors.id)
- communication_type
- subject
- message
- created_at

Communication Types:

- call
- whatsapp
- email
- sms
- meeting

---

# assets

Purpose:

Store auction property information.

Fields:

- id (UUID, Primary Key)
- title
- property_type
- location
- auction_price
- market_value
- expected_profit
- description
- status
- created_at

Status:

- available
- reserved
- assigned
- completed

---

# member_assets

Purpose:

Link members to assigned assets.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- asset_id (UUID, FK → assets.id)
- assigned_by (UUID, FK → users.id)
- assigned_date
- status
- remarks

Status:

- assigned
- processing
- completed
- cancelled

---

# contributions

Purpose:

Track member contribution or topup activities.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- asset_id (UUID, FK → assets.id)
- amount
- payment_method
- reference_no
- receipt_url
- status
- created_at

Status:

- pending
- verified
- rejected

---

# notes

Purpose:

Store advisor notes and follow-up records.

Fields:

- id (UUID, Primary Key)
- member_id (UUID, FK → members.id)
- advisor_id (UUID, FK → advisors.id)
- note
- created_at

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

- Member uploaded document
- Member submitted assessment
- Member signed consent
- Advisor added note
- Advisor created case
- Admin approved assessment
- Admin assigned asset

---

# Relationships

users
├── members
├── advisors
├── notifications
└── activity_logs

members
├── assessments
├── documents
├── contributions
├── notes
├── member_assets
├── cases
├── consents
└── communications

advisors
├── notes
├── cases
└── communications

assets
├── member_assets
└── contributions
