# PAPAIPAY Portal Blueprint V1

## Status

This is the latest approved product blueprint for the current repository direction. It supersedes older documents that describe advisor-led workflows, production payment gateway implementation, database implementation, or backend implementation as current scope.

## Current Objective

Build a fully navigable clickable UI prototype using mock data only.

The prototype must demonstrate portal structure, role-specific navigation, opportunity browsing, participation intent, project tracking, notifications, announcements, media, FAQs, and risk disclosure content without implementing production infrastructure.

Current scope:

- UI prototype only
- Mock data only
- No backend
- No database
- No payment gateway implementation
- No real authentication enforcement
- No production transaction processing

## Roles

### Member

Members represent end users who browse property participation opportunities and track their own prototype activity.

Member capabilities in the prototype:

- View dashboard summary.
- Browse available opportunities.
- Open opportunity detail pages.
- Review property and campaign information.
- Submit mock participation intent.
- Track active projects.
- Review completed projects.
- View distribution summaries and distribution history.
- Read announcements.
- View notifications by category.
- Maintain profile screens in prototype form.
- Review FAQs and risk disclosures.

### Manager

Managers represent operational users who monitor assigned properties, campaigns, members, and updates.

Manager capabilities in the prototype:

- View manager dashboard.
- Review assigned opportunities.
- Monitor participation progress.
- Prepare or review progress updates.
- View member participation lists.
- Draft announcements or updates for approval where shown.
- Review notifications and operational tasks.

### Admin

Admins represent portal operators who manage day-to-day content and campaign setup.

Admin capabilities in the prototype:

- Manage opportunity records in mock form.
- Configure campaign information.
- Control opportunity visibility.
- Manage announcements.
- Manage notification content.
- Review member lists and participation records.
- Review distribution summaries and mock distribution records.
- Manage FAQ and risk disclosure content in prototype screens.

### Super Admin

Super Admins represent highest-privilege users who control system-level settings and permissions.

Super Admin capabilities in the prototype:

- View executive dashboard.
- Manage Admin and Manager access concepts.
- Review role permission matrix.
- Control global visibility and portal settings in prototype form.
- View audit-style activity screens if represented.
- Access all Admin and Manager prototype sections.

## Authentication

Authentication is represented as prototype navigation and mock role selection only.

Target authentication concepts:

- Login entry point.
- Register or onboarding entry point for Members.
- Forgot password and reset password screens.
- OTP or verification screens where useful for clickable flow demonstration.
- Role-specific post-login landing pages.

Out of scope for current objective:

- Real user sessions.
- Real password storage.
- Real authorization middleware.
- Real identity provider integration.
- Real account recovery.

## Member Portal

The Member Portal is the primary user-facing prototype experience.

Target Member sections:

- Dashboard
- Opportunities
- Opportunity detail
- My participations
- Active projects
- Completed projects
- Distributions
- Announcements
- Notifications
- Media gallery
- FAQ
- Risk disclosure
- Profile
- Settings and security placeholders

Key Member journeys:

1. Member logs in through a mock flow.
2. Member views dashboard highlights.
3. Member browses opportunities.
4. Member opens an opportunity detail page.
5. Member reviews overview, property, campaign, gallery, FAQ, risk, and updates.
6. Member submits mock participation intent.
7. Member tracks project lifecycle and distributions.

## Admin Portal

The Admin Portal demonstrates operational management of prototype content and records.

Target Admin sections:

- Dashboard
- Opportunities
- Opportunity create/edit form
- Visibility controls
- Members
- Participations
- Projects
- Distributions
- Announcements
- Notifications
- Media gallery
- FAQs
- Risk disclosures
- Reports
- Settings

Admin workflows remain prototype-only and must use mock data.

## Property Lifecycle

The property lifecycle defines the state model shown in the UI prototype.

Recommended lifecycle states:

1. Draft
2. Internal review
3. Published
4. Funding open
5. Funding closed
6. Acquisition in progress
7. Active project
8. Distribution active
9. Completed
10. Archived

Lifecycle screens should make status visible without implying real legal, financial, or payment processing.

## Participation Model

Participation is represented as member intent or mock contribution records.

Prototype participation attributes:

- Member
- Opportunity
- Participation amount
- Participation date
- Status
- Payment status label
- Allocation percentage or units where shown
- Documents or acknowledgements where shown

Participation statuses:

- Draft
- Submitted
- Pending payment
- Payment recorded
- Confirmed
- Cancelled
- Refunded placeholder

No real investment, ownership, contract, or payment behavior is implemented in the prototype.

## Payment Flow

Payment flow is represented visually only.

Prototype payment states:

- Not started
- Pending payment
- Awaiting confirmation
- Confirmed
- Failed placeholder
- Refunded placeholder

Out of scope:

- Payment gateway implementation.
- Payment tokenization.
- Bank integrations.
- Real receipts.
- Real financial reconciliation.

## Notifications

Notifications communicate prototype alerts to users.

Notification categories:

- Opportunity updates
- Participation updates
- Payment status
- Project progress
- Distribution updates
- Announcements
- Account and security
- System notices

## Announcement Module

Announcements provide portal-wide or role-specific messages.

Announcement attributes:

- Title
- Summary
- Body
- Audience role
- Related opportunity or project
- Publish date
- Expiry date
- Status
- Priority

## Media Gallery

The Media Gallery supports visual property and progress content in mock form.

Media attributes:

- Title
- Type
- URL or local placeholder path
- Alt text
- Caption
- Related opportunity or project
- Display order
- Visibility

## Risk Disclosure

Risk disclosure content must be clearly visible in opportunity and participation flows.

Prototype disclosure topics:

- Property participation risk
- Liquidity limitations
- Market risk
- Timeline uncertainty
- Payment and completion risk
- No guaranteed return statement
- Prototype-only data notice

## FAQ Module

FAQ content supports Member and public understanding.

FAQ attributes:

- Question
- Answer
- Category
- Audience role
- Related opportunity or general scope
- Display order
- Visibility status

## Tech Stack

Prototype stack:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Mock data files or in-memory constants
- Static or client-side prototype interactions only

Not in current scope:

- Backend services
- Database implementation
- Payment gateway implementation
- Production authentication
- Production file storage
