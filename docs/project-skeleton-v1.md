# Papaipay Project Skeleton v1

## Purpose

This document defines the current project skeleton direction for Papaipay.

The skeleton must align with `docs/product-blueprint-v2.md`, which defines Papaipay as two products:

1. Corporate Website
2. Asset Participation Platform

This document is documentation-only guidance. It must not be treated as approval to add routes, modify UI, or build features without a separate implementation task.

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

## Product Areas

The application documentation must support two main products.

### 1. Corporate Website

The public Corporate Website supports:

- Public website
- Brand presence
- Team directory
- Staff profile pages
- FAQ
- Contact
- Career
- Privacy Policy
- Terms & Conditions

### 2. Asset Participation Platform

The authenticated Asset Participation Platform supports:

- Member Portal
- Admin Portal
- eKYC with planned third-party integration
- Asset Opportunities
- Contributions
- Payment Gateway
- Reporting

---

## Primary Authenticated Roles

- Member
- Admin

Advisor workflows, advisor routes, case management, and financial assessment-led onboarding are no longer primary Product Blueprint V2 concepts. Existing legacy placeholders may remain until a separate route or code cleanup task is approved, but new documentation should not position them as core product areas.

---

## Target Route Direction

The following target route direction describes Product Blueprint V2 alignment. It is not an instruction to modify application routes as part of documentation-only work.

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── team/
│   └── page.tsx
├── team/[slug]/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── contact/
│   └── page.tsx
├── career/
│   └── page.tsx
├── privacy-policy/
│   └── page.tsx
├── terms-and-conditions/
│   └── page.tsx
│
├── auth/
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   └── forgot-password/
│       └── page.tsx
│
├── member/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── profile/
│   │   └── page.tsx
│   ├── ekyc/
│   │   └── page.tsx
│   ├── assets/
│   │   └── page.tsx
│   ├── contributions/
│   │   └── page.tsx
│   ├── payments/
│   │   └── page.tsx
│   ├── reports/
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
    │   └── page.tsx
    ├── contributions/
    │   └── page.tsx
    ├── payments/
    │   └── page.tsx
    ├── reports/
    │   └── page.tsx
    ├── activity-logs/
    │   └── page.tsx
    └── settings/
        └── page.tsx
```

---

## Reserved Future Route Areas

The following modules are future-ready and should remain reserved until implementation is approved:

- Profit Distribution
- Rental Distribution
- Commission Management

Possible future route areas may include:

```text
member/distributions/
admin/profit-distributions/
admin/rental-distributions/
admin/commissions/
```

---

## Legacy Route Notes

Earlier documentation included advisor portal, case management, sales team website, advisory process, and financial assessment routes. Product Blueprint V2 does not treat these as primary product areas.

Do not remove or modify existing application routes in documentation-only tasks. Any route cleanup or migration must be handled in a separate implementation task with explicit approval.
