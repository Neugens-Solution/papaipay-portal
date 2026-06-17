# PAPAIPAY Mock Data Spec V1

## Purpose

This document defines mock data structures for PAPAIPAY Portal Prototype V1. These structures are for UI prototyping only and are not database schema approval.

## Opportunities

Fields:

- `id`
- `slug`
- `title`
- `summary`
- `location`
- `propertyType`
- `thumbnailUrl`
- `status`
- `lifecycleStatus`
- `targetAmount`
- `fundedAmount`
- `minimumParticipationAmount`
- `expectedTimelineLabel`
- `riskLevelLabel`
- `visibility`
- `propertyInfoId`
- `campaignInfoId`
- `mediaIds`
- `faqIds`
- `riskDisclosureIds`

## Members

Fields:

- `id`
- `fullName`
- `email`
- `phone`
- `profileStatus`
- `role`
- `joinedAt`
- `notificationPreferences`

## Participations

Fields:

- `id`
- `memberId`
- `opportunityId`
- `amount`
- `status`
- `paymentStatus`
- `submittedAt`
- `confirmedAt`
- `allocationLabel`
- `acknowledgementStatus`

## Active Projects

Fields:

- `id`
- `opportunityId`
- `title`
- `status`
- `startDate`
- `currentPhase`
- `nextMilestone`
- `progressPercent`
- `managerId`
- `updateIds`

## Completed Projects

Fields:

- `id`
- `opportunityId`
- `title`
- `completedAt`
- `finalStatus`
- `totalDistributedAmount`
- `summary`
- `mediaIds`

## Distributions

Fields:

- `id`
- `memberId`
- `projectId`
- `opportunityId`
- `amount`
- `status`
- `distributionDate`
- `referenceLabel`
- `notes`

## Notifications

Fields:

- `id`
- `recipientRole`
- `recipientId`
- `category`
- `title`
- `message`
- `relatedEntityType`
- `relatedEntityId`
- `read`
- `createdAt`
- `priority`

## Announcements

Fields:

- `id`
- `title`
- `summary`
- `body`
- `audienceRoles`
- `relatedOpportunityId`
- `publishDate`
- `expiryDate`
- `status`
- `priority`

## Media Gallery

Fields:

- `id`
- `title`
- `type`
- `url`
- `altText`
- `caption`
- `relatedEntityType`
- `relatedEntityId`
- `displayOrder`
- `visibility`

## FAQs

Fields:

- `id`
- `question`
- `answer`
- `category`
- `audienceRoles`
- `relatedOpportunityId`
- `displayOrder`
- `visible`

## Risk Disclosures

Fields:

- `id`
- `title`
- `body`
- `category`
- `severityLabel`
- `audienceRoles`
- `relatedOpportunityId`
- `requiresAcknowledgement`
- `displayOrder`
- `visible`
