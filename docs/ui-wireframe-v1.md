# PAPAIPAY UI Wireframe Documentation V1

## Status

This document is the visual layout source of truth for Portal Prototype V1. It is documentation-only guidance for page composition, prototype content, and mock data needs.

## Scope and Constraints

- Applies to the PAPAIPAY Portal Prototype V1 only.
- Uses mock data only.
- Does not approve backend, database, payment gateway, real authentication, or production authorization work.
- Does not approve application route, component, UI code, package, or schema changes.
- Aligns with `README.md`, `product-blueprint-v1.md`, `project-skeleton-v2.md`, `navigation-v1.md`, `component-library-v1.md`, and `mock-data-spec-v1.md`.

## Global Wireframe Principles

### Standard Shell

All authenticated portal areas should use a consistent role-aware shell:

1. Left sidebar with role navigation.
2. Top header with page title, role label, notification shortcut, profile shortcut, and prototype/mock-data label.
3. Main content region using responsive cards, tables, tabs, forms, and detail panels.
4. Empty, loading, and error placeholders represented visually only with mock content.

### Common Components

Use these documented component concepts as building blocks:

- `OpportunityCard`
- `FundingProgressBar`
- `OpportunityDetailTabs`
- `PropertyInformationPanel`
- `CampaignInformationPanel`
- `ParticipatePanel`
- `ProjectTimeline`
- `ProgressUpdateCard`
- `MediaGallery`
- `DistributionSummaryCard`
- `DistributionHistoryTable`
- `AnnouncementCard`
- `NotificationCategoryList`
- `ProfileTabs`
- `AdminOpportunityForm`
- `VisibilityControlsPanel`
- `RolePermissionMatrix`

### Visibility-Controlled Content

Where content is controlled by prototype visibility settings, the wireframe should show one of these states:

- Visible to current role.
- Hidden from current role with no rendered member content.
- Admin-only visibility preview.
- Draft or unpublished status label.
- Archived status label.

## Member Portal

### Member Navigation

Primary navigation:

1. Dashboard
2. Opportunities
3. My Participations
4. Active Projects
5. Completed Projects
6. Distributions
7. Announcements
8. Notifications
9. Media Gallery
10. FAQ
11. Risk Disclosure
12. Profile
13. Settings
14. Security

---

## 1. Member Dashboard

### Purpose

Provide a member landing page that summarizes participation activity, highlights open opportunities, and surfaces recent communications.

### Layout Structure

1. **Header**
   - Page title: `Dashboard`.
   - Welcome message with member name.
   - Quick actions: `Browse Opportunities`, `View Distributions`.
   - Notification/profile shortcuts.
2. **Summary Cards Row**
   - `Total Participation`.
   - `Active Projects`.
   - `Completed Projects`.
   - `Total Distribution`.
3. **Open Opportunities Section**
   - Section title and `View All` action.
   - 2-3 featured opportunity cards.
   - Each card includes funding progress and status.
4. **Recent Updates Section**
   - List of latest progress updates connected to member projects.
   - Each item includes date, project name, status, and short summary.
5. **Announcements Section**
   - Announcement cards filtered to member audience.
   - Priority label and publish date.

### Components Used

- `OpportunityCard`
- `FundingProgressBar`
- `ProgressUpdateCard`
- `AnnouncementCard`
- `DistributionSummaryCard`

### Mock Data Required

- Members: `fullName`, `profileStatus`, `notificationPreferences`.
- Participations: `amount`, `status`, `paymentStatus`, `allocationLabel`.
- Opportunities: `title`, `location`, `status`, `fundedAmount`, `targetAmount`, `thumbnailUrl`.
- Active Projects: `title`, `status`, `progressPercent`, `updateIds`.
- Completed Projects: `title`, `totalDistributedAmount`, `completedAt`.
- Announcements: `title`, `summary`, `audienceRoles`, `publishDate`, `priority`, `status`.

---

## 2. Member Open Opportunities

### Purpose

Allow members to browse currently visible opportunities and filter by key property and campaign attributes.

### Layout Structure

1. **Header**
   - Page title: `Open Opportunities`.
   - Introductory risk/prototype note.
2. **Filter Bar**
   - State filter.
   - Property Type filter.
   - Status filter.
   - Search input by property name or location.
   - Clear filters action.
3. **Opportunity Grid**
   - Responsive card grid.
   - Empty state when filters return no opportunities.

### Opportunity Card Layout

Each opportunity card displays:

- Property Image.
- Property Name.
- Location.
- Property Type.
- Tenure.
- Bumi Status.
- Unit Price.
- Funding Progress.
- Available Units.
- Campaign End Date.
- Status.

### Components Used

- `OpportunityCard`
- `FundingProgressBar`

### Mock Data Required

- Opportunities: `id`, `slug`, `title`, `summary`, `location`, `propertyType`, `thumbnailUrl`, `status`, `lifecycleStatus`, `targetAmount`, `fundedAmount`, `minimumParticipationAmount`, `expectedTimelineLabel`, `riskLevelLabel`, `visibility`.
- Extended prototype fields for card display: `state`, `tenure`, `bumiStatus`, `unitPrice`, `availableUnits`, `campaignEndDate`.

---

## 3. Member Opportunity Detail

### Purpose

Present full opportunity information so a member can review property details, campaign terms, prototype media, FAQs, risk disclosures, and submit mock participation intent.

### Layout Structure

1. **Hero Banner**
   - Large property image.
   - Property name, location, type, lifecycle status, risk label.
   - Primary call-to-action: `Participate`.
2. **Tabbed or Anchored Detail Navigation**
   - Overview.
   - Property Information.
   - Campaign Information.
   - Media Gallery.
   - Timeline.
   - Progress Updates.
   - Distributions.
   - FAQ.
   - Risk Disclosure.
3. **Property Information**
   - Property type, location, size, tenure, valuation placeholder, Bumi status, notes.
4. **Campaign Information**
   - Target amount, funded amount, minimum participation, campaign dates, lifecycle status, funding status.
5. **Funding Progress**
   - Progress bar, percentage, funded amount, target amount, available units.
6. **Participate Section**
   - Mock amount or unit selector.
   - Acknowledgement checkbox.
   - Risk disclosure reminder.
   - Prototype submit button.
7. **Risk Disclosure**
   - Severity labels and acknowledgement requirement.
8. **FAQ**
   - Opportunity-specific questions and answers.
9. **Documents**
   - Visibility-controlled document list with title, type, status, and visible-to label.
10. **Media Gallery**
   - Images/videos with captions, categories, display order, and visibility label.
11. **Estimation Outcome**
   - Visibility-controlled estimate panel showing prototype projected cost/sale/distribution information when enabled.

### Visibility-Controlled Sections

- **Documents**: render only if the opportunity visibility settings allow the member role to view documents; admins may preview hidden/draft labels.
- **Estimation Outcome**: render only if the opportunity visibility settings allow the member role to view estimated outcome data; otherwise omit from member view.

### Components Used

- `OpportunityDetailTabs`
- `PropertyInformationPanel`
- `CampaignInformationPanel`
- `FundingProgressBar`
- `ParticipatePanel`
- `ProjectTimeline`
- `ProgressUpdateCard`
- `MediaGallery`
- `DistributionSummaryCard`

### Mock Data Required

- Opportunities: all opportunity fields, especially `propertyInfoId`, `campaignInfoId`, `mediaIds`, `faqIds`, `riskDisclosureIds`, `visibility`.
- Participations: `amount`, `status`, `paymentStatus`, `acknowledgementStatus`.
- Media Gallery: `title`, `type`, `url`, `altText`, `caption`, `visibility`.
- FAQs: `question`, `answer`, `audienceRoles`, `visible`.
- Risk Disclosures: `title`, `body`, `severityLabel`, `requiresAcknowledgement`, `visible`.
- Extended prototype fields: `documents`, `estimationOutcome`, `campaignStartDate`, `campaignEndDate`, `availableUnits`, `unitPrice`.

---

## 4. Member Active Projects

### Purpose

Allow members to track projects tied to confirmed or active participations.

### Layout Structure

1. **Header**
   - Page title: `Active Projects`.
   - Summary note explaining lifecycle progress is mock data.
2. **Project Card Grid/List**
   - Property Name.
   - Current Status.
   - Progress Percentage.
   - Latest Update.
   - Link to detail view.
3. **Active Project Detail Page**
   - Header with project title, status, manager label, and progress percentage.
   - Timeline.
   - Progress Updates.
   - Photos.
   - Notes.

### Components Used

- `ProjectTimeline`
- `ProgressUpdateCard`
- `MediaGallery`
- `FundingProgressBar` or progress indicator.

### Mock Data Required

- Active Projects: `id`, `opportunityId`, `title`, `status`, `startDate`, `currentPhase`, `nextMilestone`, `progressPercent`, `managerId`, `updateIds`.
- Opportunities: `title`, `location`, `thumbnailUrl`.
- Media Gallery: progress photos and captions.
- Notifications or update records for latest update summaries.

---

## 5. Member Completed Projects

### Purpose

Show completed project outcomes, final costs, sale information, and member-specific contribution/distribution summary.

### Layout Structure

1. **Header**
   - Page title: `Completed Projects`.
   - Total completed projects and total distribution summary.
2. **Completed Project Cards or Table**
   - Property Summary.
   - Completed date.
   - Final status.
   - Total distributed amount.
3. **Completed Project Detail**
   - Property Summary.
   - Acquisition Cost.
   - Renovation Cost.
   - Legal Cost.
   - Misc Cost.
   - Total Cost.
   - Sale Price.
   - Distribution Summary.
4. **Member View Panel**
   - My Units.
   - My Contribution.
   - My Distribution.

### Components Used

- `DistributionSummaryCard`
- `DistributionHistoryTable`
- `MediaGallery`

### Mock Data Required

- Completed Projects: `title`, `completedAt`, `finalStatus`, `totalDistributedAmount`, `summary`, `mediaIds`.
- Opportunities: `title`, `location`, `propertyType`, `thumbnailUrl`.
- Distributions: `amount`, `status`, `distributionDate`, `referenceLabel`, `notes`.
- Participations: `amount`, `allocationLabel`, `status`.
- Extended prototype cost fields: `acquisitionCost`, `renovationCost`, `legalCost`, `miscCost`, `totalCost`, `salePrice`, `myUnits`, `myContribution`, `myDistribution`.

---

## 6. Member Distribution History

### Purpose

Provide a member-facing record of prototype distributions connected to completed or distribution-active projects.

### Layout Structure

1. **Header**
   - Page title: `Distribution History`.
   - Summary cards for total distributed, pending distribution, and latest paid date.
2. **Distribution Table**
   - Property.
   - Contribution.
   - Distribution.
   - Paid Date.
   - Status.
3. **Filters**
   - Status.
   - Property.
   - Date range.

### Components Used

- `DistributionSummaryCard`
- `DistributionHistoryTable`

### Mock Data Required

- Distributions: `id`, `memberId`, `projectId`, `opportunityId`, `amount`, `status`, `distributionDate`, `referenceLabel`, `notes`.
- Participations: `amount`, `allocationLabel`.
- Opportunities and Completed Projects: `title`, `finalStatus`.

---

## 7. Member Notifications

### Purpose

Display categorized notifications that help members follow account, opportunity, participation, project, distribution, and system updates.

### Layout Structure

1. **Header**
   - Page title: `Notifications`.
   - Mark all as read action.
2. **Category Sidebar or Tabs**
   - Account.
   - Opportunity.
   - Participation.
   - Progress Updates.
   - Distribution.
   - System.
3. **Notification List**
   - Title, message, priority, read/unread state, created date, related entity link.
4. **Detail Preview**
   - Selected notification message and related action.

### Components Used

- `NotificationCategoryList`

### Mock Data Required

- Notifications: `recipientRole`, `recipientId`, `category`, `title`, `message`, `relatedEntityType`, `relatedEntityId`, `read`, `createdAt`, `priority`.

---

## 8. Member Announcements

### Purpose

Provide access to published announcements for the member audience.

### Layout Structure

1. **Announcement Listing**
   - Page title and category/status filters.
   - Announcement cards sorted by priority and publish date.
2. **Announcement Card Layout**
   - Title.
   - Summary.
   - Priority.
   - Publish date.
   - Related opportunity.
   - Status.
3. **Announcement Detail Layout**
   - Title and metadata.
   - Full body.
   - Related opportunity link.
   - Expiry date where relevant.

### Components Used

- `AnnouncementCard`

### Mock Data Required

- Announcements: `id`, `title`, `summary`, `body`, `audienceRoles`, `relatedOpportunityId`, `publishDate`, `expiryDate`, `status`, `priority`.
- Opportunities: `title` for related opportunity labels.

---

## 9. Member Profile

### Purpose

Allow members to review and edit prototype profile, bank, security, and KYC status information.

### Layout Structure

1. **Header**
   - Page title: `Profile`.
   - Profile status badge.
2. **Tabs**
   - Personal Information.
   - Bank Account.
   - Security.
   - KYC Status.
3. **Personal Information Tab**
   - Name, email, phone, joined date, notification preferences.
4. **Bank Account Tab**
   - Placeholder bank details, masked account number, verification status.
5. **Security Tab**
   - Password placeholder, two-factor/OTP prototype status, recent security notices.
6. **KYC Status Tab**
   - KYC status badge, required document placeholders, review notes.

### Components Used

- `ProfileTabs`

### Mock Data Required

- Members: `fullName`, `email`, `phone`, `profileStatus`, `role`, `joinedAt`, `notificationPreferences`.
- Notifications: account/security category notices.
- Extended prototype fields: `bankAccountStatus`, `maskedBankAccount`, `kycStatus`, `kycDocuments`, `securityStatus`.

---

# Admin Portal

## Admin Navigation

Primary navigation:

1. Dashboard
2. Opportunities
3. Visibility Controls
4. Members
5. Participations
6. Projects
7. Distributions
8. Announcements
9. Notifications
10. Media Gallery
11. FAQs
12. Risk Disclosures
13. Reports
14. Settings

---

## 1. Admin Dashboard

### Purpose

Provide operators with a high-level view of member growth, campaign state, funding activity, KYC workload, and pending distributions.

### Layout Structure

1. **Header**
   - Page title: `Admin Dashboard`.
   - Quick actions: `Create Opportunity`, `Create Announcement`.
2. **Summary Cards**
   - Total Members.
   - Active Opportunities.
   - Funding Progress.
   - Pending KYC.
   - Pending Distributions.
3. **Recent Activities**
   - Activity feed with entity type, actor, status, and date.
4. **Recent Members**
   - Compact member list with profile/KYC status.
5. **Recent Opportunities**
   - Opportunity list with status, funding percentage, visibility, and quick manage action.

### Components Used

- `FundingProgressBar`
- `OpportunityCard`
- `DistributionSummaryCard`

### Mock Data Required

- Members, Opportunities, Participations, Distributions, Notifications.
- Extended prototype activity feed fields: `actorName`, `activityType`, `entityType`, `entityLabel`, `createdAt`.

---

## 2. Admin Members

### Purpose

Allow admins to review member records, participation activity, and KYC status in prototype form.

### Layout Structure

1. **Listing Layout**
   - Search and filters for profile status, KYC status, join date, participation status.
   - Table columns: member name, email, phone, profile status, KYC status, joined date, total participation, actions.
2. **Member Detail Layout**
   - Member identity summary.
   - Participation history.
   - Distribution summary.
   - Notification preferences.
   - Internal notes placeholder.
3. **KYC Management Layout**
   - KYC status card.
   - Document checklist placeholders.
   - Review notes.
   - Prototype actions: `Mark Pending`, `Mark Approved`, `Request Update`.

### Components Used

- `DistributionSummaryCard`
- `DistributionHistoryTable`
- `ProfileTabs`

### Mock Data Required

- Members: all member fields.
- Participations: member-linked participation records.
- Distributions: member-linked distribution records.
- Extended prototype fields: `kycStatus`, `kycDocuments`, `reviewNotes`, `totalParticipationAmount`.

---

## 3. Admin Opportunities

### Purpose

Support opportunity management screens for creating, editing, publishing, and controlling visibility of mock opportunity records.

### Layout Structure

1. **Listing Layout**
   - Tabs or filters: All, Drafts, Published, Funding Open, Active Projects, Completed, Archived.
   - Table/card data: title, location, property type, lifecycle status, funding progress, visibility, campaign end date, actions.
2. **Create Opportunity Layout**
   - Multi-section form with save draft and preview actions.
3. **Edit Opportunity Layout**
   - Same form structure as create, populated with selected opportunity data.
   - Status and visibility controls shown prominently.
4. **Property Information Section**
   - Property name, image, location, state, property type, tenure, Bumi status, size, valuation, notes.
5. **Financial Information Section**
   - Acquisition cost, renovation cost, legal cost, misc cost, total cost, sale price estimate, target amount, funded amount, unit price.
6. **Participation Information Section**
   - Minimum participation amount, available units, campaign dates, participation status labels, acknowledgement requirements.
7. **Visibility Controls Section**
   - Draft/published toggle.
   - Role visibility.
   - Documents visibility.
   - Estimation outcome visibility.
   - Feature placement.
   - Archive status.

### Components Used

- `AdminOpportunityForm`
- `VisibilityControlsPanel`
- `FundingProgressBar`
- `PropertyInformationPanel`
- `CampaignInformationPanel`
- `MediaGallery`

### Mock Data Required

- Opportunities: all opportunity fields.
- Media Gallery, FAQs, Risk Disclosures.
- Extended prototype fields: property, financial, participation, document, and estimation outcome fields listed above.

---

## 4. Admin Progress Updates

### Purpose

Allow admins to create and manage project progress updates with media, notes, progress percentage, and status labels.

### Layout Structure

1. **Header**
   - Page title: `Progress Updates`.
   - Action: `Create Update`.
2. **Update Listing**
   - Project/opportunity filter.
   - Status filter.
   - Cards or table showing latest updates.
3. **Update Form Layout**
   - Photos upload placeholder.
   - Videos upload/link placeholder.
   - Notes editor.
   - Progress % input.
   - Project Status selector.
   - Visibility/audience selector.
4. **Preview Panel**
   - Shows how update appears to members.

### Components Used

- `ProgressUpdateCard`
- `MediaGallery`
- `ProjectTimeline`

### Mock Data Required

- Active Projects: `title`, `status`, `progressPercent`, `updateIds`.
- Media Gallery: `type`, `url`, `caption`, `visibility`.
- Extended update fields: `title`, `date`, `category`, `summary`, `notes`, `progressPercent`, `projectStatus`, `videoUrls`.

---

## 5. Admin Distributions

### Purpose

Manage mock distribution records and communicate their prototype lifecycle statuses.

### Statuses

- Pending.
- Processing.
- Paid.
- Completed.

### Layout Structure

1. **Header**
   - Page title: `Distributions`.
   - Summary cards by status.
2. **Distribution Listing**
   - Table columns: property, member, contribution, distribution amount, paid date, status, reference, actions.
3. **Distribution Detail Drawer/Page**
   - Member summary.
   - Project/opportunity summary.
   - Distribution status timeline.
   - Notes and reference label.
4. **Bulk Action Placeholder**
   - Prototype-only status update controls.

### Components Used

- `DistributionSummaryCard`
- `DistributionHistoryTable`

### Mock Data Required

- Distributions: all distribution fields.
- Members: `fullName`, `email`.
- Participations: `amount`, `allocationLabel`.
- Opportunities and Completed Projects: `title`, `finalStatus`.

---

## 6. Admin Announcements

### Purpose

Create, edit, publish, and archive announcements for selected role audiences.

### Layout Structure

1. **Listing Layout**
   - Filters by audience, priority, status, publish date.
   - Announcement cards/table rows.
2. **Create Layout**
   - Title, summary, body, audience roles, related opportunity, priority, publish date, expiry date, status.
3. **Edit Layout**
   - Same fields populated with selected announcement.
4. **Publish Layout**
   - Preview panel and publish confirmation state.
5. **Archive Layout**
   - Archive reason placeholder and status update.

### Components Used

- `AnnouncementCard`

### Mock Data Required

- Announcements: all announcement fields.
- Opportunities: `id`, `title` for relationship selector.

---

## 7. Admin Reports

### Purpose

Provide prototype reporting layouts for operational review without implementing actual analytics or exports.

### Layout Structure

1. **Report Tabs**
   - Funding Reports.
   - Opportunity Reports.
   - Member Reports.
   - Distribution Reports.
2. **Funding Reports**
   - Funding progress by opportunity, target amount, funded amount, percentage, status.
3. **Opportunity Reports**
   - Lifecycle status, visibility, campaign status, participation count.
4. **Member Reports**
   - Member count, profile/KYC status, participation activity.
5. **Distribution Reports**
   - Pending, processing, paid, completed totals and dates.
6. **Prototype Controls**
   - Date range filter.
   - Status filter.
   - Download placeholder button.

### Components Used

- `FundingProgressBar`
- `DistributionSummaryCard`
- `DistributionHistoryTable`

### Mock Data Required

- Opportunities, Members, Participations, Active Projects, Completed Projects, Distributions.
- Extended computed mock metrics: `participationCount`, `fundingPercentage`, `memberStatusCounts`, `distributionStatusTotals`.

---

## 8. Admin Settings

### Purpose

Represent configurable prototype settings for portal behavior, financial labels, notifications, visibility, and permissions.

### Layout Structure

1. **Tabs**
   - General.
   - Financial.
   - Notifications.
   - Visibility Controls.
   - Roles & Permissions.
2. **General Tab**
   - Portal name, support contact, default timezone placeholder.
3. **Financial Tab**
   - Currency label, contribution labels, distribution labels, payment status labels.
4. **Notifications Tab**
   - Category toggles and audience settings.
5. **Visibility Controls Tab**
   - Default role visibility for opportunities, documents, estimation outcomes, announcements.
6. **Roles & Permissions Tab**
   - Permission matrix for Member, Manager, Admin, Super Admin.

### Components Used

- `VisibilityControlsPanel`
- `RolePermissionMatrix`
- `NotificationCategoryList`

### Mock Data Required

- Notifications categories and settings.
- Extended settings fields: `portalName`, `supportEmail`, `currencyLabel`, `defaultVisibility`, `rolePermissions`, `notificationDefaults`.

---

# Manager Portal

## Manager Dashboard and Navigation

### Purpose

Give managers a focused workspace for monitoring assigned opportunities, projects, participations, progress updates, announcements, notifications, reports, and profile information.

### Navigation

1. Dashboard.
2. Assigned Opportunities.
3. Projects.
4. Participations.
5. Progress Updates.
6. Announcements.
7. Notifications.
8. Reports.
9. Profile.

### Layout Structure

1. **Header**
   - Page title: `Manager Dashboard`.
   - Assigned manager name and role.
   - Quick actions: `Draft Progress Update`, `Review Assigned Opportunities`.
2. **Summary Cards**
   - Assigned Opportunities.
   - Active Projects.
   - Pending Progress Updates.
   - Participation Records.
   - Draft Announcements.
3. **Assigned Opportunities Section**
   - Cards/table showing property name, status, funding progress, campaign date, visibility.
4. **Project Monitoring Section**
   - Active project rows with progress percentage, current phase, next milestone, latest update.
5. **Participation Monitoring Section**
   - Participation list filtered to assigned opportunities.
6. **Progress Update Drafts Section**
   - Draft/update cards with notes, photos, videos, progress %, and project status.
7. **Notifications and Tasks Section**
   - Operational alerts grouped by category and priority.

### Components Used

- `OpportunityCard`
- `FundingProgressBar`
- `ProjectTimeline`
- `ProgressUpdateCard`
- `NotificationCategoryList`
- `AnnouncementCard`

### Mock Data Required

- Opportunities: assigned opportunity records.
- Active Projects: assigned project records with `managerId`.
- Participations: records tied to assigned opportunities.
- Media Gallery: update photos/videos.
- Announcements: draft/review announcements.
- Notifications: manager recipient role records.
- Extended manager fields: `assignedOpportunityIds`, `pendingUpdateCount`, `draftAnnouncementCount`.

---

# Super Admin Portal

## Super Admin Dashboard and Navigation

### Purpose

Provide global oversight of portal activity, users, roles, permissions, visibility controls, audit-style logs, announcements, notifications, and system settings.

### Navigation

1. Dashboard.
2. Users.
3. Roles & Permissions.
4. Admins.
5. Managers.
6. Opportunities Oversight.
7. Visibility Controls.
8. Audit Logs.
9. Announcements.
10. Notifications.
11. System Settings.

### Layout Structure

1. **Header**
   - Page title: `Super Admin Dashboard`.
   - Global role label.
   - Quick actions: `Review Roles`, `Open System Settings`.
2. **Executive Summary Cards**
   - Total Users.
   - Total Members.
   - Admins.
   - Managers.
   - Active Opportunities.
   - Pending Approvals.
3. **Global Opportunity Oversight**
   - Opportunities across statuses with funding progress and visibility status.
4. **Role and Permission Overview**
   - Permission matrix preview and recently changed roles.
5. **Visibility Controls Overview**
   - Portal-level visibility defaults and exceptions.
6. **Audit-Style Activity Feed**
   - Recent user, role, content, opportunity, and settings actions.
7. **Global Communications**
   - Announcements and notifications management summary.

### Components Used

- `RolePermissionMatrix`
- `VisibilityControlsPanel`
- `FundingProgressBar`
- `OpportunityCard`
- `AnnouncementCard`
- `NotificationCategoryList`

### Mock Data Required

- Members plus staff/admin mock users.
- Opportunities and visibility settings.
- Announcements and notifications across roles.
- Extended super admin fields: `rolePermissions`, `staffUsers`, `auditLogEntries`, `pendingApprovalCount`, `globalVisibilityDefaults`.

---

# Mock Data Coverage Checklist

To support all wireframes, mock data should include or derive:

- Opportunities.
- Members.
- Participations.
- Active Projects.
- Completed Projects.
- Distributions.
- Notifications.
- Announcements.
- Media Gallery.
- FAQs.
- Risk Disclosures.
- Extended prototype-only display fields for state, tenure, Bumi status, unit price, available units, campaign dates, cost breakdowns, documents, estimation outcomes, KYC, bank placeholders, role permissions, visibility defaults, and audit-style activities.
