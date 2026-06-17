# Papaipay Product Blueprint V2

> **Legacy / superseded notice:** This document is retained for historical reference only. The current approved direction is PAPAIPAY Portal Blueprint V1 in `docs/product-blueprint-v1.md`, focused on a clickable UI prototype with mock data only.


## Purpose

This document defines the current product direction for Papaipay.

Papaipay is organized as two related products:

1. Corporate Website
2. Asset Participation Platform

Product Blueprint V2 supersedes older documentation that positioned Papaipay primarily around debt advisory, advisor workflows, case management, or financial assessment-led onboarding.

---

## Product A: Corporate Website

The Corporate Website is the public-facing brand and information layer for Papaipay.

### Objectives

- Establish Papaipay's public brand presence.
- Explain the company's purpose, services, and asset participation direction.
- Provide public access to company information and policies.
- Support inquiries, recruitment, and trust-building content.

### Core Website Sections

- Home
- About
- Team Directory
- Staff Profile Pages
- FAQ
- Contact
- Career
- Privacy Policy
- Terms & Conditions

### Website Users

- Public visitors
- Prospective members
- Job applicants
- Partners
- Internal staff maintaining public content

---

## Product B: Asset Participation Platform

The Asset Participation Platform is the authenticated application used by members and admins to manage asset opportunities, member participation, contributions, payments, eKYC, and reporting.

### Objectives

- Allow members to browse and choose asset opportunities themselves.
- Support member onboarding through profile completion and eKYC.
- Support contributions, multiple contributions, and topups.
- Provide admins with operational tools for assets, members, contributions, payments, and reports.
- Prepare the platform for future distribution and commission modules.

---

## User Roles

Papaipay V2 uses two primary authenticated roles.

### Member

Members can:

- Register and log in.
- Maintain their profile.
- Complete eKYC when the third-party integration is available.
- Browse asset opportunities.
- Choose opportunities themselves.
- Make one or more contributions to opportunities.
- Perform topups when supported by the opportunity rules.
- View payment and contribution history.
- View reports and participation status available to them.

### Admin

Admins can:

- Manage members.
- Manage asset opportunities.
- Manage contribution records.
- Manage payment gateway operations and reconciliation.
- Review eKYC statuses from the third-party provider.
- Manage reports.
- Configure platform content and operational settings.
- Monitor activity logs.

### Removed Role Emphasis

Product Blueprint V2 removes primary emphasis from:

- Advisor workflows
- Advisor portals
- Advisory recommendations
- Case management
- Financial assessment as the primary onboarding flow

These concepts should not drive new documentation, planning, or implementation unless explicitly reintroduced by product leadership.

---

## Asset Model

Papaipay V2 focuses on auction property opportunities.

### Asset Opportunity Characteristics

- Assets represent auction properties or related property opportunities.
- Members browse available opportunities.
- Members select the opportunities they want to participate in.
- A member may contribute more than once.
- Topups are allowed when supported by the opportunity.
- Contribution rules, limits, statuses, and reporting must be transparent.

### Contribution Model

The contribution model must support:

- Initial contribution
- Additional contribution
- Topup
- Payment status tracking
- Receipt or transaction reference tracking
- Admin verification or payment gateway reconciliation
- Member-facing contribution history

---

## eKYC Direction

eKYC is a planned integration with a third-party provider.

The platform should reserve structure for:

- eKYC provider reference IDs
- eKYC status tracking
- Verification timestamps
- Provider response metadata
- Admin review visibility
- Member-facing status display

The current blueprint does not require building a custom eKYC engine.

---

## Payment Gateway Direction

Payment Gateway is a core planned module for the Asset Participation Platform.

The platform should reserve structure for:

- Payment intents or payment sessions
- Gateway transaction references
- Payment status tracking
- Contribution linkage
- Receipts
- Reconciliation reporting
- Admin review and exception handling

---

## Reporting Direction

Reporting should support both member-facing and admin-facing needs.

### Member Reporting

- Contribution history
- Payment status
- Asset participation status
- Receipts or transaction references

### Admin Reporting

- Member participation reports
- Asset opportunity reports
- Contribution reports
- Payment gateway reports
- eKYC status reports
- Operational activity logs

---

## Future-Ready Reserved Modules

The documentation and schema direction should reserve space for the following future modules without treating them as MVP-complete features:

- Profit Distribution
- Rental Distribution
- Commission Management

These modules should be documented as future-ready areas until implementation is explicitly approved.

---

## V2 Member Journey

Register  
→ Complete Profile  
→ Complete eKYC through third-party provider when available  
→ Browse Asset Opportunities  
→ Choose Opportunity  
→ Make Contribution  
→ Add Topup or Additional Contribution when allowed  
→ Track Payment and Participation Status  
→ View Reports

---

## V2 Admin Journey

Login  
→ Manage Members  
→ Manage eKYC Statuses  
→ Manage Asset Opportunities  
→ Monitor Contributions  
→ Review Payment Gateway Transactions  
→ Reconcile Exceptions  
→ Generate Reports  
→ Monitor Activity Logs

---

## Documentation Alignment Rules

When updating documentation for Papaipay V2:

- Treat Corporate Website and Asset Participation Platform as the two primary products.
- Use Admin and Member as the primary authenticated roles.
- Position eKYC as a third-party integration.
- Position Payment Gateway as a core planned module.
- Describe assets as auction property opportunities.
- Document member choice, multiple contributions, and topups.
- Avoid presenting advisor workflows, case management, or financial assessment-led onboarding as primary product flows.
- Keep Profit Distribution, Rental Distribution, and Commission Management as reserved future-ready sections unless implementation is approved.
