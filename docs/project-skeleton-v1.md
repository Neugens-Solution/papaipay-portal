# Papaipay Project Skeleton v1

> **Legacy / superseded notice:** This document is retained for historical reference only. The current target route direction is `docs/project-skeleton-v2.md` for PAPAIPAY Portal Prototype V1.


## Purpose

This document defines the current project skeleton direction for Papaipay and aligns the documentation structure with `docs/product-blueprint-v2.md`.

Papaipay V2 is organized around three application areas:

1. Corporate Website
2. Member Portal
3. Admin Portal

The Corporate Website is the public-facing brand and information layer. The Member Portal and Admin Portal together form the authenticated Asset Participation Platform.

This document is documentation-only guidance. It must not be treated as approval to add routes, modify routes, change UI, or build features without a separate implementation task.

---

## Tech Stack

Use the following stack:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Shadcn UI
- Supabase
- Supabase Auth
- Supabase Storage
- PostgreSQL
- Vercel-ready deployment structure

---

## Application Areas

The application documentation must support the following primary areas.

### 1. Corporate Website

The public Corporate Website supports:

- Public brand presence
- Company purpose and service information
- Auction property and asset participation education
- Team Directory
- Staff Profile pages
- FAQ
- Contact and inquiry paths
- Career information
- Privacy Policy
- Terms & Conditions
- Sitemap
- WhatsApp CTA entry points where appropriate

### 2. Member Portal

The authenticated Member Portal supports:

- Member registration and login
- Profile completion and account settings
- Security settings
- eKYC status display with planned third-party integration
- Asset opportunity browsing
- Asset opportunity details
- Member-selected participation
- Contribution and topup history
- Payment status and receipts
- Profit Distribution placeholder
- Rental Distribution placeholder
- Notifications
- Member-facing reporting

### 3. Admin Portal

The authenticated Admin Portal supports:

- Admin login and operations dashboard
- Member management
- eKYC status review from a third-party provider
- Asset opportunity management
- Contribution and topup monitoring
- Payment Gateway operations and reconciliation
- Profit Distribution placeholder
- Rental Distribution placeholder
- Commission placeholder
- Reporting and Analytics
- Export workflows
- Corporate content management
- Activity logs
- Platform settings

---

## Primary Authenticated Roles

- Member
- Admin

Advisor, Sales Agent, Case Management, and Financial Assessment are not Phase 1 primary modules. They may remain as future or parking lot items only if needed, but they must not drive Phase 1 documentation, planning, route structure, or implementation.

---

## Terminology Rules

Use Product Blueprint V2 terminology consistently:

- Use **member**, not investor.
- Use **asset opportunity**, not investment marketplace.
- Use **contribution** or **topup**, not purchase.
- Describe assets as auction property opportunities where domain context is needed.
- Describe eKYC as a planned third-party integration, not a custom eKYC engine.
- Describe Payment Gateway as a planned platform module that requires provider integration and reconciliation support.

---

## Target Route Direction

The following target route direction describes Product Blueprint V2 alignment. It is not an instruction to modify application routes as part of documentation-only work.

### Corporate Website V2 Routes

```text
/
/about
/henrys-asset-programme
/how-it-works
/asset-opportunities
/faq
/our-team
/team/[slug]
/career
/contact
/privacy-policy
/terms-and-conditions
/sitemap
```

### Auth Routes

```text
/auth/login
/auth/register
/auth/forgot-password
/auth/reset-password
/auth/verify-otp
/auth/resend-otp
```

### Member Portal Routes

```text
/member/dashboard
/member/profile
/member/settings
/member/security
/member/ekyc
/member/assets
/member/assets/[id]
/member/contributions
/member/payments
/member/distributions
/member/notifications
```

### Admin Portal Routes

```text
/admin/dashboard
/admin/members
/admin/ekyc
/admin/assets
/admin/assets/new
/admin/assets/[id]
/admin/contributions
/admin/payments
/admin/distributions
/admin/commissions
/admin/reports
/admin/analytics
/admin/exports
/admin/corporate-content
/admin/activity-logs
/admin/settings
```

### App Router Skeleton View

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── henrys-asset-programme/
│   └── page.tsx
├── how-it-works/
│   └── page.tsx
├── asset-opportunities/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── our-team/
│   └── page.tsx
├── team/[slug]/
│   └── page.tsx
├── career/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── terms-and-conditions/
│   └── page.tsx
├── sitemap/
│   └── page.tsx
│
├── auth/
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── forgot-password/
│   │   └── page.tsx
│   ├── reset-password/
│   │   └── page.tsx
│   ├── verify-otp/
│   │   └── page.tsx
│   └── resend-otp/
│       └── page.tsx
│
├── member/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── settings/
│   │   └── page.tsx
│   ├── security/
│   │   └── page.tsx
│   ├── ekyc/
│   │   └── page.tsx
│   ├── assets/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── contributions/
│   │   └── page.tsx
│   ├── payments/
│   │   └── page.tsx
│   ├── distributions/
│   │   └── page.tsx
│   └── notifications/
│       └── page.tsx
│
└── admin/
    ├── dashboard/
    │   └── page.tsx
    ├── members/
    │   └── page.tsx
    ├── ekyc/
    │   └── page.tsx
    ├── assets/
    │   ├── page.tsx
    │   ├── new/
    │   │   └── page.tsx
    │   └── [id]/
    │       └── page.tsx
    ├── contributions/
    │   └── page.tsx
    ├── payments/
    │   └── page.tsx
    ├── distributions/
    │   └── page.tsx
    ├── commissions/
    │   └── page.tsx
    ├── reports/
    │   └── page.tsx
    ├── analytics/
    │   └── page.tsx
    ├── exports/
    │   └── page.tsx
    ├── corporate-content/
    │   └── page.tsx
    ├── activity-logs/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

---

## Corporate Website Skeleton Sections

### Team Directory

The Team Directory should present public team information and link to Staff Profile pages. It supports trust-building content for public visitors, prospective members, partners, job applicants, and internal staff maintaining public content.

### Staff Profile

Staff Profile pages should support individual staff biography content, public role information, profile imagery, and related trust-building details approved for public display.

### Career Page

The Career Page should support recruitment information, open-role messaging, application instructions, and contact paths for job applicants.

### WhatsApp CTA

WhatsApp CTA placements may be reserved for public inquiry and support entry points. They should be treated as calls to action, not as a replacement for formal member portal, admin portal, eKYC, payment, or reporting workflows.

---

## Member Portal Skeleton Sections

### eKYC Third-Party Integration Placeholder

The Member Portal should reserve space for eKYC status display, provider reference IDs, verification timestamps, provider response metadata, and member-facing status messages. Product Blueprint V2 does not require a custom eKYC engine.

### Payment Gateway Placeholder

The Member Portal should reserve space for payment sessions or intents, gateway transaction references, payment statuses, contribution linkage, receipts, and member-facing payment history.

### Profit Distribution Placeholder

Profit Distribution is a reserved future-ready module. Member-facing surfaces may reserve space for distribution records and statuses, but implementation requires explicit approval.

### Rental Distribution Placeholder

Rental Distribution is a reserved future-ready module. Member-facing surfaces may reserve space for rental distribution records and statuses, but implementation requires explicit approval.

---

## Admin Portal Skeleton Sections

### Reporting and Analytics

Reporting and Analytics should support operational visibility for members, asset opportunities, contributions, payments, eKYC statuses, activity logs, and exports. Admin reporting should also prepare for future distribution and commission reporting without treating those modules as Phase 1 complete.

### eKYC Third-Party Integration Placeholder

The Admin Portal should reserve space for reviewing eKYC provider statuses, provider reference IDs, verification timestamps, provider response metadata, and exception states returned by the third-party provider.

### Payment Gateway Placeholder

The Admin Portal should reserve space for gateway transaction monitoring, reconciliation reporting, receipts, contribution linkage, payment exceptions, and admin review workflows.

### Profit Distribution Placeholder

Profit Distribution is a future-ready reserved module for admin review, reporting, and operational workflows. It is not a Phase 1 primary module unless explicitly approved.

### Rental Distribution Placeholder

Rental Distribution is a future-ready reserved module for admin review, reporting, and operational workflows. It is not a Phase 1 primary module unless explicitly approved.

### Commission Placeholder

Commission Management is a future-ready reserved module for admin review, reporting, and operational workflows. It is not a Phase 1 primary module unless explicitly approved.

---

## Reserved Future and Parking Lot Areas

The following modules are not Phase 1 primary modules and should remain reserved until implementation is explicitly approved:

- Advisor Portal
- Sales Agent workflows
- Sales Team Website
- Case Management
- Financial Assessment-led onboarding
- Advisor recommendations
- Profit Distribution
- Rental Distribution
- Commission Management

Do not remove or modify existing application routes in documentation-only tasks. Any route cleanup or migration must be handled in a separate implementation task with explicit approval.
