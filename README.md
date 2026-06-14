# Papaipay

Papaipay is a product ecosystem developed by Neugens Solution with two primary products:

1. **Corporate Website** — the public brand, company information, team, FAQ, contact, career, privacy, and terms presence.
2. **Asset Participation Platform** — the authenticated platform for members and admins to manage eKYC, asset opportunities, contributions, payment gateway workflows, and reporting.

## Product Positioning

Papaipay Product Blueprint V2 positions the platform around auction property asset participation.

Members browse asset opportunities and choose opportunities themselves. The platform must support multiple contributions and topups, with payment gateway integration planned as a core module.

The latest direction removes primary emphasis from advisor workflows, case management, and financial assessment-led onboarding.

## User Roles

Primary authenticated roles:

- Member
- Admin

Public visitors use the Corporate Website.

## Product Areas

### Corporate Website

- Public website
- Brand presence
- Team directory
- Staff profile pages
- FAQ
- Contact
- Career
- Privacy Policy
- Terms & Conditions

### Asset Participation Platform

- Member Portal
- Admin Portal
- eKYC with planned third-party integration
- Asset Opportunities
- Contributions
- Topups
- Payment Gateway
- Reporting

## Future-Ready Reserved Areas

The documentation reserves space for the following future modules:

- Profit Distribution
- Rental Distribution
- Commission Management

These areas should remain future-ready unless implementation is explicitly approved.

## Tech Stack

- Next.js
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Tailwind CSS
- Shadcn UI
- Vercel

## Documentation

Project documentation is stored in the `/docs` folder.

Primary documents:

- `docs/product-blueprint-v2.md`
- `docs/database-schema-v1.md`
- `docs/project-skeleton-v1.md`
- `docs/route-audit-v1.md`
- `docs/milestones.md`
- `docs/codex-rules.md`

Legacy reference:

- `docs/blueprint-v1.md` is superseded by `docs/product-blueprint-v2.md` for product direction.

## Development Rules

- 1 task = 1 Codex session
- 1 session = 1 branch
- PR merged = session closed
- Do not continue old Codex sessions after merge
- Every new session must inspect the latest codebase first
- Database schema changes require approval
- Documentation-only tasks must not modify application code, routes, UI, or add features
