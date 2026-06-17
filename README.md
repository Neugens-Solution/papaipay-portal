# PAPAIPAY Portal Prototype V1

PAPAIPAY Portal Prototype V1 is a fully navigable, clickable UI prototype for the approved PAPAIPAY Portal Blueprint V1.

The current product objective is to validate portal navigation, page structure, role-based experiences, and core user journeys before any production backend, database, or payment gateway work is approved.

## Current Scope

This repository currently represents a prototype scope only:

- UI prototype only
- Mock data only
- No backend
- No database
- No payment gateway implementation
- No production authentication or authorization implementation
- No real transactions, distributions, or member records

## Approved Roles

Portal Blueprint V1 defines four authenticated role experiences:

- Super Admin
- Admin
- Manager
- Member

## Product Direction

PAPAIPAY Portal Prototype V1 focuses on property participation workflows using mock data. Members browse opportunities, review campaign and property information, participate in available opportunities, track active and completed projects, view announcements, receive notifications, and review distribution summaries.

Admins, Managers, and Super Admins use role-appropriate operational screens to manage prototype content, visibility, lifecycle states, announcements, notifications, member participation views, and permissions.

## Documentation

Current Portal Blueprint V1 documentation is stored in `/docs`.

Primary current documents:

- `docs/product-blueprint-v1.md`
- `docs/project-skeleton-v2.md`
- `docs/navigation-v1.md`
- `docs/component-library-v1.md`
- `docs/mock-data-spec-v1.md`
- `docs/route-audit-v2.md`

Legacy or superseded references retained for history:

- `docs/blueprint-v1.md`
- `docs/product-blueprint-v2.md`
- `docs/project-skeleton-v1.md`
- `docs/route-audit-v1.md`
- `docs/database-schema-v1.md`
- `docs/milestones.md`

If any legacy document conflicts with Portal Blueprint V1, Portal Blueprint V1 is the approved source of truth for the current prototype objective.

## Tech Stack

The prototype repository uses:

- Next.js App Router
- TypeScript
- Tailwind CSS
- React
- Mock data structures

Backend, database, Supabase, PostgreSQL, authentication providers, storage, and payment gateway integrations are not part of the current implementation objective.

## Development Rules

- Documentation-only tasks must not modify application code, routes, UI, or feature behavior.
- Do not create backend services without explicit approval.
- Do not create database schema or migrations without explicit approval.
- Do not implement payment gateway behavior without explicit approval.
- Do not treat prototype mock data as production data design approval.
