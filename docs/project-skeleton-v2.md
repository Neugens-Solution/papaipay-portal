# PAPAIPAY Project Skeleton V2

## Purpose

This document defines the target route structure for PAPAIPAY Portal Prototype V1. It is documentation-only guidance and does not approve route creation or application code changes.

## Route Principles

- Routes support a fully navigable clickable UI prototype.
- Routes use mock data only.
- Routes must not imply backend, database, or payment gateway implementation.
- Role areas are separated for navigation clarity.

## Auth Routes

| Target route | Purpose |
| --- | --- |
| `/auth/login` | General login entry. |
| `/auth/register` | Member registration/onboarding prototype. |
| `/auth/forgot-password` | Password recovery prototype. |
| `/auth/reset-password` | Reset password prototype. |
| `/auth/verify-otp` | Verification prototype. |
| `/auth/member-login` | Member-specific login entry if separate role login is retained. |
| `/auth/admin-login` | Admin-specific login entry. |
| `/auth/manager-login` | Manager-specific login entry. |
| `/auth/super-admin-login` | Super Admin-specific login entry. |

## Member Routes

| Target route | Purpose |
| --- | --- |
| `/member/dashboard` | Member dashboard. |
| `/member/opportunities` | Browse available opportunities. |
| `/member/opportunities/[id]` | Opportunity detail. |
| `/member/participations` | Member participation list. |
| `/member/projects/active` | Active projects. |
| `/member/projects/completed` | Completed projects. |
| `/member/distributions` | Distribution summary and history. |
| `/member/announcements` | Member announcements. |
| `/member/notifications` | Member notifications. |
| `/member/media` | Media gallery. |
| `/member/faq` | Member FAQ. |
| `/member/risk-disclosure` | Risk disclosures. |
| `/member/profile` | Member profile. |
| `/member/settings` | Member settings. |
| `/member/security` | Member security placeholder. |

## Admin Routes

| Target route | Purpose |
| --- | --- |
| `/admin/dashboard` | Admin dashboard. |
| `/admin/opportunities` | Opportunity management. |
| `/admin/opportunities/new` | Create opportunity prototype form. |
| `/admin/opportunities/[id]` | Opportunity management detail. |
| `/admin/visibility-controls` | Visibility controls. |
| `/admin/members` | Member management. |
| `/admin/participations` | Participation management. |
| `/admin/projects` | Project lifecycle management. |
| `/admin/distributions` | Distribution management. |
| `/admin/announcements` | Announcement management. |
| `/admin/notifications` | Notification management. |
| `/admin/media` | Media gallery management. |
| `/admin/faqs` | FAQ management. |
| `/admin/risk-disclosures` | Risk disclosure management. |
| `/admin/reports` | Reports. |
| `/admin/settings` | Admin settings. |

## Manager Routes

| Target route | Purpose |
| --- | --- |
| `/manager/dashboard` | Manager dashboard. |
| `/manager/opportunities` | Assigned opportunities. |
| `/manager/opportunities/[id]` | Assigned opportunity detail. |
| `/manager/projects` | Assigned project monitoring. |
| `/manager/participations` | Participation monitoring. |
| `/manager/progress-updates` | Progress update drafting/review. |
| `/manager/announcements` | Announcement drafting/review. |
| `/manager/notifications` | Manager notifications. |
| `/manager/reports` | Manager reports. |
| `/manager/profile` | Manager profile. |

## Super Admin Routes

| Target route | Purpose |
| --- | --- |
| `/super-admin/dashboard` | Super Admin dashboard. |
| `/super-admin/users` | User and staff access management. |
| `/super-admin/roles` | Role permission matrix. |
| `/super-admin/admins` | Admin management. |
| `/super-admin/managers` | Manager management. |
| `/super-admin/opportunities` | Global opportunity oversight. |
| `/super-admin/visibility-controls` | Global visibility controls. |
| `/super-admin/audit-logs` | Audit-style activity prototype. |
| `/super-admin/announcements` | Global announcement management. |
| `/super-admin/notifications` | Global notification management. |
| `/super-admin/settings` | System settings prototype. |
