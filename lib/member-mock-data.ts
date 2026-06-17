export const member = {
  id: "mem-001",
  fullName: "Aisyah Rahman",
  email: "aisyah.rahman@example.com",
  phone: "+60 12-345 6789",
  profileStatus: "Verified Member",
  role: "Member",
  joinedAt: "15 Jan 2026",
  notificationPreferences: ["Opportunity updates", "Project progress", "Distribution notices"],
  bankAccountStatus: "Verified for prototype distributions",
  maskedBankAccount: "Maybank •••• 4821",
  kycStatus: "Approved",
  securityStatus: "Password and OTP prototype enabled",
};

export const opportunities = [
  { id: "opp-001", slug: "ampang-heights-residence", title: "Ampang Heights Residence", summary: "Freehold residential unit in a mature Kuala Lumpur neighbourhood with renovation upside.", location: "Ampang, Kuala Lumpur", state: "Kuala Lumpur", propertyType: "Residential", tenure: "Freehold", bumiStatus: "Non-Bumi Lot", unitPrice: 25000, availableUnits: 18, thumbnailUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80", status: "Funding Open", lifecycleStatus: "Campaign", targetAmount: 900000, fundedAmount: 612000, minimumParticipationAmount: 25000, expectedTimelineLabel: "12–15 months", riskLevelLabel: "Moderate", visibility: "Visible to members", campaignStartDate: "01 Jun 2026", campaignEndDate: "31 Jul 2026" },
  { id: "opp-002", slug: "cyberjaya-retail-pods", title: "Cyberjaya Retail Pods", summary: "Small-format retail participation near office catchments and transit corridors.", location: "Cyberjaya, Selangor", state: "Selangor", propertyType: "Retail", tenure: "Leasehold", bumiStatus: "Bumi Release Approved", unitPrice: 15000, availableUnits: 27, thumbnailUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80", status: "Funding Open", lifecycleStatus: "Campaign", targetAmount: 650000, fundedAmount: 292500, minimumParticipationAmount: 15000, expectedTimelineLabel: "9–12 months", riskLevelLabel: "Balanced", visibility: "Visible to members", campaignStartDate: "10 Jun 2026", campaignEndDate: "15 Aug 2026" },
  { id: "opp-003", slug: "penang-heritage-suite", title: "Penang Heritage Suite", summary: "Boutique heritage suite concept with staged refurbishment and curated media updates.", location: "George Town, Penang", state: "Penang", propertyType: "Hospitality", tenure: "Freehold", bumiStatus: "Not Applicable", unitPrice: 20000, availableUnits: 12, thumbnailUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80", status: "Preview", lifecycleStatus: "Coming Soon", targetAmount: 720000, fundedAmount: 144000, minimumParticipationAmount: 20000, expectedTimelineLabel: "15–18 months", riskLevelLabel: "Higher", visibility: "Visible to members", campaignStartDate: "01 Aug 2026", campaignEndDate: "30 Sep 2026" },
];

export const participations = [
  { id: "part-001", memberId: "mem-001", opportunityId: "opp-001", amount: 50000, status: "Confirmed", paymentStatus: "Mock cleared", submittedAt: "05 Jun 2026", confirmedAt: "06 Jun 2026", allocationLabel: "2 units", acknowledgementStatus: "Acknowledged" },
  { id: "part-002", memberId: "mem-001", opportunityId: "opp-002", amount: 30000, status: "Intent Submitted", paymentStatus: "Prototype pending", submittedAt: "12 Jun 2026", confirmedAt: "—", allocationLabel: "2 units", acknowledgementStatus: "Acknowledged" },
];

export const activeProjects = [
  { id: "proj-001", opportunityId: "opp-001", title: "Ampang Heights Residence", status: "Renovation in progress", startDate: "07 Jun 2026", currentPhase: "Interior works", nextMilestone: "Electrical inspection", progressPercent: 62, managerId: "mgr-001", latestUpdate: "Cabinetry installation started and site photos uploaded." },
  { id: "proj-002", opportunityId: "opp-002", title: "Cyberjaya Retail Pods", status: "Funding validation", startDate: "13 Jun 2026", currentPhase: "Campaign monitoring", nextMilestone: "Participation reconciliation", progressPercent: 45, managerId: "mgr-002", latestUpdate: "Retail valuation notes have been summarized for members." },
];

export const completedProjects = [
  { id: "done-001", opportunityId: "opp-004", title: "Subang Corner Residence", completedAt: "28 May 2026", finalStatus: "Distributed", totalDistributedAmount: 118500, summary: "Renovation completed ahead of schedule with final sale closed in May.", acquisitionCost: 520000, renovationCost: 64000, legalCost: 18000, miscCost: 9500, totalCost: 611500, salePrice: 730000, myUnits: "3 units", myContribution: 60000, myDistribution: 7900 },
  { id: "done-002", opportunityId: "opp-005", title: "Melaka Shoplot Refresh", completedAt: "02 Apr 2026", finalStatus: "Closed", totalDistributedAmount: 84200, summary: "Commercial refresh completed with tenant-ready handover and prototype distribution record.", acquisitionCost: 410000, renovationCost: 52500, legalCost: 14200, miscCost: 7800, totalCost: 484500, salePrice: 568700, myUnits: "2 units", myContribution: 40000, myDistribution: 5200 },
];

export const distributions = [
  { id: "dist-001", projectId: "done-001", opportunityId: "opp-004", property: "Subang Corner Residence", contribution: 60000, amount: 7900, status: "Paid", distributionDate: "31 May 2026", referenceLabel: "DIST-SCR-0526", notes: "Final prototype distribution" },
  { id: "dist-002", projectId: "done-002", opportunityId: "opp-005", property: "Melaka Shoplot Refresh", contribution: 40000, amount: 5200, status: "Paid", distributionDate: "05 Apr 2026", referenceLabel: "DIST-MSR-0426", notes: "Final prototype distribution" },
  { id: "dist-003", projectId: "proj-001", opportunityId: "opp-001", property: "Ampang Heights Residence", contribution: 50000, amount: 1800, status: "Scheduled", distributionDate: "30 Sep 2026", referenceLabel: "DIST-AHR-0926", notes: "Projected interim distribution" },
];

export const announcements = [
  { id: "ann-001", title: "June member briefing now available", summary: "A concise update on open campaigns, prototype visibility states, and upcoming project milestones.", body: "This member briefing summarizes campaign progress, active project updates, and the mock-data assumptions used in this prototype. No real transaction, database, payment, or authentication action is performed.", relatedOpportunityId: "opp-001", publishDate: "14 Jun 2026", expiryDate: "30 Jun 2026", status: "Published", priority: "High" },
  { id: "ann-002", title: "Risk disclosure reminder", summary: "Members should review risk labels before submitting any mock participation intent.", body: "Participation screens include acknowledgement controls so the journey can be demonstrated without creating legal acceptance or production records.", relatedOpportunityId: "opp-002", publishDate: "11 Jun 2026", expiryDate: "15 Jul 2026", status: "Published", priority: "Normal" },
];

export const notifications = [
  { id: "not-001", category: "Opportunity", title: "Ampang Heights reached 68% funded", message: "Funding progress increased after new mock allocations were added.", read: false, createdAt: "17 Jun 2026", priority: "High", relatedHref: "/member/opportunities/ampang-heights-residence" },
  { id: "not-002", category: "Progress Updates", title: "New renovation photos uploaded", message: "The latest active project update includes interior work progress notes.", read: false, createdAt: "16 Jun 2026", priority: "Normal", relatedHref: "/member/projects/active" },
  { id: "not-003", category: "Distribution", title: "Projected distribution scheduled", message: "A mock scheduled distribution has been added for September 2026.", read: true, createdAt: "15 Jun 2026", priority: "Normal", relatedHref: "/member/distributions" },
  { id: "not-004", category: "Account", title: "Profile status verified", message: "Your prototype member profile is marked as verified.", read: true, createdAt: "10 Jun 2026", priority: "Low", relatedHref: "/member/profile" },
];

export const faqs = [
  { question: "Is this a real participation?", answer: "No. This prototype uses mock data only and does not create legal, payment, or database records." },
  { question: "Can I browse opportunity details?", answer: "Yes. The pages are fully clickable so stakeholders can review the intended member journey." },
];

export const riskDisclosures = [
  { title: "Property participation risk", body: "Returns are not guaranteed and prototype values are illustrative only.", severityLabel: "Important", requiresAcknowledgement: true },
  { title: "Liquidity and timeline risk", body: "Project timelines may shift in real programmes; this prototype shows example milestones only.", severityLabel: "Moderate", requiresAcknowledgement: true },
];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-MY", { style: "currency", currency: "MYR", maximumFractionDigits: 0 }).format(value);
}

export function fundingPercent(funded: number, target: number) {
  return Math.round((funded / target) * 100);
}
