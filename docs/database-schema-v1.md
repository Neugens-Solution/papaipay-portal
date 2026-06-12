# Papaipay Database Schema v1

## Overview

This document defines the initial database structure for Papaipay MVP.

The schema is designed to support:

* Member Management
* Advisor Management
* Financial Assessment
* Document Management
* Asset Management
* Contribution Tracking
* Activity Logging

---

# users

Purpose:

System authentication and role management.

Fields:

* id (UUID, Primary Key)
* email
* role
* status
* created_at
* updated_at

Roles:

* member
* advisor
* admin

---

# members

Purpose:

Store member profile information.

Fields:

* id (UUID, Primary Key)
* user_id (UUID, FK → users.id)
* full_name
* ic_number
* phone
* email
* address
* occupation
* monthly_income
* monthly_commitment
* status
* advisor_id (UUID, FK → advisors.id)
* created_at
* updated_at

Status:

* new
* assessment_pending
* under_review
* approved
* rejected
* completed

---

# advisors

Purpose:

Store advisor / sales consultant information.

Fields:

* id (UUID, Primary Key)
* user_id (UUID, FK → users.id)
* full_name
* phone
* email
* status
* created_at

---

# assessments

Purpose:

Store financial assessment data.

Fields:

* id (UUID, Primary Key)
* member_id (UUID, FK → members.id)
* monthly_income
* other_income
* car_loan_balance
* personal_loan_balance
* credit_card_balance
* total_commitment
* remarks
* status
* submitted_at
* reviewed_at

Status:

* draft
* submitted
* approved
* rejected

---

# documents

Purpose:

Store uploaded member documents.

Fields:

* id (UUID, Primary Key)
* member_id (UUID, FK → members.id)
* document_type
* file_url
* status
* uploaded_at
* verified_at

Document Types:

* ic
* payslip
* bank_statement
* epf
* other

Status:

* pending
* verified
* rejected

---

# assets

Purpose:

Store auction property information.

Fields:

* id (UUID, Primary Key)
* title
* property_type
* location
* auction_price
* market_value
* expected_profit
* description
* status
* created_at

Status:

* available
* reserved
* assigned
* completed

---

# member_assets

Purpose:

Link members to assigned assets.

Fields:

* id (UUID, Primary Key)
* member_id (UUID, FK → members.id)
* asset_id (UUID, FK → assets.id)
* assigned_by (UUID, FK → users.id)
* assigned_date
* status
* remarks

Status:

* assigned
* processing
* completed
* cancelled

---

# contributions

Purpose:

Track member contribution or topup activities.

Fields:

* id (UUID, Primary Key)
* member_id (UUID, FK → members.id)
* asset_id (UUID, FK → assets.id)
* amount
* payment_method
* reference_no
* receipt_url
* status
* created_at

Status:

* pending
* verified
* rejected

---

# notes

Purpose:

Store advisor notes and follow-up records.

Fields:

* id (UUID, Primary Key)
* member_id (UUID, FK → members.id)
* advisor_id (UUID, FK → advisors.id)
* note
* created_at

---

# activity_logs

Purpose:

Store audit trail and activity history.

Fields:

* id (UUID, Primary Key)
* user_id (UUID, FK → users.id)
* action
* entity
* entity_id
* description
* created_at

Examples:

* Member uploaded document
* Admin approved assessment
* Advisor added note

---

# Relationships

users
├── members
├── advisors
└── activity_logs

members
├── assessments
├── documents
├── contributions
├── notes
└── member_assets

assets
├── member_assets
└── contributions

advisors
└── notes

