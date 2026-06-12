export type UserRole = "member" | "advisor" | "admin";
export type DashboardArea = UserRole;

export type MemberStatus = "new" | "assessment_pending" | "under_review" | "approved" | "rejected" | "completed";
export type AssessmentStatus = "draft" | "submitted" | "approved" | "rejected";
export type DocumentStatus = "pending" | "verified" | "rejected";
export type CaseStatus = "open" | "under_review" | "recommendation_prepared" | "awaiting_member" | "completed" | "cancelled";

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface MemberProfile {
  id: string;
  userId: string;
  fullName: string;
  email: string;
  phone?: string;
  status: MemberStatus;
  advisorId?: string;
}

export interface AdvisoryCase {
  id: string;
  memberId: string;
  advisorId?: string;
  caseReference: string;
  status: CaseStatus;
  recommendation?: string;
}
