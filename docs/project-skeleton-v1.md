# Papaipay Project Skeleton v1

## Purpose

This document defines the initial project skeleton for the Papaipay platform.

The objective is to create a clean, scalable, and modular foundation for the corporate website, member portal, advisor portal, admin portal, and sales team website.

Codex must follow this structure unless instructed otherwise.

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

The application must support five main areas:

1. Public Corporate Website
2. Member Portal
3. Advisor Portal
4. Admin Portal
5. Sales Team Website

---

## Route Structure

Use the following route structure:

```text
app/
├── page.tsx
├── about/
│   └── page.tsx
├── how-it-works/
│   └── page.tsx
├── advisory-process/
│   └── page.tsx
├── faq/
│   └── page.tsx
├── contact/
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
│   ├── assessment/
│   │   └── page.tsx
│   ├── documents/
│   │   └── page.tsx
│   ├── consent/
│   │   └── page.tsx
│   ├── cases/
│   │   └── page.tsx
│   ├── assets/
│   │   └── page.tsx
│   ├── contributions/
│   │   └── page.tsx
│   ├── ekyc/
│   │   └── page.tsx
│   └── notifications/
│       └── page.tsx
│
├── advisor/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── members/
│   │   └── page.tsx
│   ├── cases/
│   │   └── page.tsx
│   ├── follow-up/
│   │   └── page.tsx
│   ├── notes/
│   │   └── page.tsx
│   ├── recommendations/
│   │   └── page.tsx
│   └── reports/
│       └── page.tsx
│
├── admin/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── members/
│   │   └── page.tsx
│   ├── advisors/
│   │   └── page.tsx
│   ├── cases/
│   │   └── page.tsx
│   ├── assets/
│   │   └── page.tsx
│   ├── assessments/
│   │   └── page.tsx
│   ├── contributions/
│   │   └── page.tsx
│   ├── communications/
│   │   └── page.tsx
│   ├── consents/
│   │   └── page.tsx
│   ├── notifications/
│   │   └── page.tsx
│   ├── reports/
│   │   └── page.tsx
│   ├── exports/
│   │   └── page.tsx
│   ├── activity-logs/
│   │   └── page.tsx
│   └── settings/
│       └── page.tsx
│
└── sales-team/
    ├── page.tsx
    ├── about/
    │   └── page.tsx
    ├── team/
    │   └── page.tsx
    ├── services/
    │   └── page.tsx
    ├── success-stories/
    │   └── page.tsx
    ├── faq/
    │   └── page.tsx
    └── contact/
        └── page.tsx
