# PAPAIPAY Route Audit V2

## Scope

This audit compares current repository routes against the target PAPAIPAY Portal Blueprint V1 route structure defined in `docs/project-skeleton-v2.md`.

This is a documentation-only audit. It does not approve route deletion, route creation, UI changes, or feature implementation.

## Current Repository Route Summary

The repository currently contains public website routes, auth routes, member routes, admin routes, and legacy advisor/sales-team routes.

Current route groups observed:

- Public: `/`, `/about`, `/career`, `/contact`, `/faq`, `/privacy-policy`, `/terms-and-conditions`, `/sitemap`, `/our-team`, `/team/[slug]`, and legacy marketing pages.
- Auth: `/auth/login`, `/auth/register`, `/auth/forgot-password`, `/auth/reset-password`, `/auth/verify-otp`, `/auth/resend-otp`, `/auth/member-login`, `/auth/admin-login`, `/auth/advisor-login`.
- Member: `/member/dashboard`, `/member/profile`, `/member/settings`, `/member/security`, `/member/notifications`, `/member/assets`, `/member/assets/[id]`, `/member/contributions`, `/member/payments`, `/member/distributions`, plus legacy advisory-oriented member pages.
- Admin: `/admin/dashboard`, `/admin/members`, `/admin/assets`, `/admin/assets/new`, `/admin/assets/[id]`, `/admin/notifications`, `/admin/distributions`, `/admin/payments`, `/admin/reports`, `/admin/settings`, plus several legacy operational pages.
- Advisor: `/advisor/*` legacy routes.
- Sales Team: `/sales-team/*` legacy routes.

## Routes to Keep

These routes align with or can support Portal Blueprint V1 prototype navigation:

| Current route | Keep rationale |
| --- | --- |
| `/auth/login` | General login prototype. |
| `/auth/register` | Member onboarding prototype. |
| `/auth/forgot-password` | Password recovery prototype. |
| `/auth/reset-password` | Reset password prototype. |
| `/auth/verify-otp` | Verification prototype. |
| `/auth/member-login` | Member role login prototype. |
| `/auth/admin-login` | Admin role login prototype. |
| `/member/dashboard` | Member dashboard target. |
| `/member/profile` | Member profile target. |
| `/member/settings` | Member settings target. |
| `/member/security` | Member security placeholder target. |
| `/member/notifications` | Member notifications target. |
| `/member/distributions` | Member distributions target. |
| `/admin/dashboard` | Admin dashboard target. |
| `/admin/members` | Admin member management target. |
| `/admin/notifications` | Admin notification management target. |
| `/admin/distributions` | Admin distribution management target. |
| `/admin/reports` | Admin reports target. |
| `/admin/settings` | Admin settings target. |

Public corporate routes may remain as supporting marketing or informational pages, but they are not the core Portal Prototype V1 objective.

## Routes to Modify Later

These routes are conceptually useful but should be renamed or realigned in a future implementation task, not during documentation-only work:

| Current route | Target alignment |
| --- | --- |
| `/asset-opportunities` | Consider aligning with `/member/opportunities` or public opportunity preview strategy. |
| `/member/assets` | Rename/realign to `/member/opportunities`. |
| `/member/assets/[id]` | Rename/realign to `/member/opportunities/[id]`. |
| `/member/contributions` | Rename/realign to `/member/participations`. |
| `/member/payments` | Keep only as mock payment status if needed; avoid real gateway implication. |
| `/admin/assets` | Rename/realign to `/admin/opportunities`. |
| `/admin/assets/new` | Rename/realign to `/admin/opportunities/new`. |
| `/admin/assets/[id]` | Rename/realign to `/admin/opportunities/[id]`. |
| `/admin/contributions` | Rename/realign to `/admin/participations`. |
| `/admin/payments` | Keep only as mock payment status if needed; avoid real gateway implication. |
| `/admin/corporate-content` | Could become content/announcement/media management depending approved IA. |
| `/admin/analytics` | Could remain as reports/dashboard analytics if mock-only. |
| `/admin/activity-logs` | Could align with audit-style logs for Super Admin. |

## Routes to Remove Later

These routes appear tied to superseded advisor-led or unrelated flows and should be reviewed for removal in a separate approved route cleanup task:

| Current route | Reason |
| --- | --- |
| `/auth/advisor-login` | Advisor role is not part of Portal Blueprint V1. |
| `/advisor/dashboard` | Advisor portal is superseded by Manager role. |
| `/advisor/members` | Advisor portal is superseded by Manager role. |
| `/advisor/cases` | Case-management flow is superseded. |
| `/advisor/follow-up` | Advisor follow-up flow is superseded. |
| `/advisor/notes` | Advisor notes flow is superseded. |
| `/advisor/recommendations` | Advisor recommendation flow is superseded. |
| `/advisor/reports` | Advisor reporting should be replaced by Manager reporting if needed. |
| `/member/assessment` | Financial assessment-led onboarding is superseded. |
| `/member/cases` | Case-management flow is superseded. |
| `/member/consent` | Keep only if reframed as risk/participation acknowledgement; otherwise remove later. |
| `/member/documents` | Keep only if reframed as prototype document placeholders; otherwise remove later. |
| `/member/ekyc` | Real eKYC is not current scope; keep only as placeholder if explicitly approved. |
| `/admin/advisors` | Advisor management is superseded by Manager management. |
| `/admin/assessments` | Financial assessment-led flow is superseded. |
| `/admin/cases` | Case-management flow is superseded. |
| `/admin/commissions` | Commission management is not current prototype scope. |
| `/admin/communications` | Should be replaced by announcements/notifications modules. |
| `/admin/consents` | Should be reframed as risk acknowledgement if retained. |
| `/admin/ekyc` | Real eKYC is not current scope. |
| `/admin/exports` | Export behavior implies backend/data operations and is not current prototype scope. |
| `/sales-team/*` | Sales-team microsite is outside Portal Blueprint V1. |
| `/advisory-process` | Advisory positioning is superseded. |
| `/henrys-asset-programme` | Legacy program page; review separately. |

## Missing Routes

Target routes not currently present:

| Missing target route | Notes |
| --- | --- |
| `/auth/manager-login` | Manager role login prototype. |
| `/auth/super-admin-login` | Super Admin role login prototype. |
| `/member/opportunities` | Target Member opportunity list. |
| `/member/opportunities/[id]` | Target Member opportunity detail. |
| `/member/participations` | Target Member participation list. |
| `/member/projects/active` | Target active projects. |
| `/member/projects/completed` | Target completed projects. |
| `/member/announcements` | Member announcements. |
| `/member/media` | Member media gallery. |
| `/member/faq` | Member FAQ. |
| `/member/risk-disclosure` | Member risk disclosures. |
| `/admin/opportunities` | Target Admin opportunity management. |
| `/admin/opportunities/new` | Target Admin create opportunity form. |
| `/admin/opportunities/[id]` | Target Admin opportunity detail. |
| `/admin/visibility-controls` | Visibility management. |
| `/admin/participations` | Participation management. |
| `/admin/projects` | Project lifecycle management. |
| `/admin/announcements` | Announcement management. |
| `/admin/media` | Media gallery management. |
| `/admin/faqs` | FAQ management. |
| `/admin/risk-disclosures` | Risk disclosure management. |
| `/manager/dashboard` | Manager dashboard. |
| `/manager/opportunities` | Manager assigned opportunities. |
| `/manager/opportunities/[id]` | Manager opportunity detail. |
| `/manager/projects` | Manager project monitoring. |
| `/manager/participations` | Manager participation monitoring. |
| `/manager/progress-updates` | Manager progress updates. |
| `/manager/announcements` | Manager announcements. |
| `/manager/notifications` | Manager notifications. |
| `/manager/reports` | Manager reports. |
| `/manager/profile` | Manager profile. |
| `/super-admin/dashboard` | Super Admin dashboard. |
| `/super-admin/users` | User access management. |
| `/super-admin/roles` | Role permission matrix. |
| `/super-admin/admins` | Admin management. |
| `/super-admin/managers` | Manager management. |
| `/super-admin/opportunities` | Global opportunity oversight. |
| `/super-admin/visibility-controls` | Global visibility controls. |
| `/super-admin/audit-logs` | Audit-style logs. |
| `/super-admin/announcements` | Global announcements. |
| `/super-admin/notifications` | Global notifications. |
| `/super-admin/settings` | System settings prototype. |

## Missing Pages

The highest-priority missing page concepts for a future implementation task are:

- Manager portal pages.
- Super Admin portal pages.
- Member opportunity list/detail pages using opportunity terminology.
- Member active and completed project pages.
- Member announcement, FAQ, media, and risk disclosure pages.
- Admin opportunity management pages using opportunity terminology.
- Admin visibility controls.
- Admin announcement, FAQ, media, and risk disclosure management pages.
- Role permission matrix page.

## Legacy Documentation Note

Older route audits and skeleton documents remain retained for history. Where they conflict with this audit or Portal Blueprint V1, this audit and `docs/product-blueprint-v1.md` should be treated as the current documentation direction.
