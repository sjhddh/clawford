import type { ComponentType } from "react";

export type Lang = "zh" | "en" | "ko";

export interface Localized {
  zh: string;
  en: string;
  ko: string;
}

export interface NavTranslations {
  structure: string;
  houses: string;
  courses: string;
  journey: string;
  assessment: string;
  connect: string;
  connectAction: string;
  students: string;
}

export interface HeroTranslations {
  badge: string;
  title1: string;
  title2: string;
  subtitle: string;
  primary: string;
  secondary: string;
  quote: string;
  panelNote: string;
  panelFile: string;
  panelTab: string;
}

export interface SectionTranslations {
  structureTitle: string;
  structureText: string;
  flowTitle: string;
  flowText: string;
  flowSteps: string[];
  terminalTitle: string;
  terminalText: string;
  curriculumTitle: string;
  curriculumText: string;
  courseCatalogTitle: string;
  courseCatalogText: string;
  courseCatalogLocked: string;
  curriculumLocked: string;
  journeyTitle: string;
  journeyText: string;
  credentialsTitle: string;
  credentialsText: string;
  principlesTitle: string;
  principlesText: string;
  examTitle: string;
  examText: string;
}

export interface TerminalTranslations {
  idle: string;
  connected: string;
  connectButton: string;
  usernamePlaceholder: string;
  passwordPlaceholder: string;
  loginHint: string;
  manualPolicyHint: string;
  displayNamePlaceholder: string;
  connecting: string;
  skillTitle: string;
  skillHint: string;
  manualTitle: string;
  examPrerequisite: string;
}

export interface UiTranslations {
  learn: string;
  learned: string;
  startExam: string;
  retakeExam: string;
  passed: string;
  duration: string;
  level: string;
  credits: string;
  exploreCourse: string;
  comingSoon: string;
  lessons: string;
  professor: string;
  reviewed: string;
  pending: string;
}

export interface CourseAuthoringTranslations {
  title: string;
  body: string;
  step1: string;
  step2: string;
  step3: string;
  step4: string;
  step5: string;
  outcome: string;
  runtimeNote: string;
  guide: string;
}

export interface SortingHatTranslations {
  title: string;
  subtitle: string;
  uid: string;
  displayNameLabel: string;
  displayNamePlaceholder: string;
  displayNameSave: string;
  displayNameSaved: string;
  linkTitle: string;
  linkHint: string;
  linkPlaceholder: string;
  linkButton: string;
  verdictLabel: string;
  lockedHint: string;
  editDisplayName: string;
}

export interface StudentWallTranslations {
  title: string;
  subtitle: string;
  viewAll: string;
  noStudents: string;
  name: string;
  uid: string;
  house: string;
  totalCredits: string;
  completedModules: string;
  examStatus: string;
  bestScore: string;
  noScore: string;
  attemptsSuffix: string;
  passed: string;
  inProgress: string;
  enrolled: string;
  pageTitle: string;
  pageSubtitle: string;
  backHome: string;
  searchPlaceholder: string;
  viewProfile: string;
  loadError: string;
  noMatch: string;
}

export interface StudentProfileTranslations {
  brandTitle: string;
  slogan: string;
  backToDirectory: string;
  studentId: string;
  officialTranscript: string;
  status: string;
  academy: string;
  academyNone: string;
  houseVerdict: string;
  verdictNone: string;
  examRecord: string;
  examPassedLabel: string;
  examNotPassed: string;
  bestScoreLabel: string;
  latestScoreLabel: string;
  attemptsLabel: string;
  academicStanding: string;
  creditsEarned: string;
  modulesCompleted: string;
  credentialsEarned: string;
  enrolledSince: string;
  lastUpdated: string;
  notFound: string;
  notFoundHint: string;
  loading: string;
  verdictRationale: string;
  shareHint: string;
  electiveCourses: string;
  electiveCredits: string;
  electivesCompleted: string;
  noElectives: string;
  electiveInProgress: string;
  electiveStatusCompleted: string;
}

export interface CommonTranslations {
  skipToContent: string;
  brandSubtitle: string;
  errorTitle: string;
  errorMessage: string;
  emptyCourseCatalog: string;
}

export interface Translations {
  nav: NavTranslations;
  hero: HeroTranslations;
  sections: SectionTranslations;
  courseAuthoring: CourseAuthoringTranslations;
  sortingHat: SortingHatTranslations;
  terminal: TerminalTranslations;
  ui: UiTranslations;
  studentWall: StudentWallTranslations;
  studentProfile: StudentProfileTranslations;
  common: CommonTranslations;
  footer: string;
}

// ---- Curriculum ----

export interface CurriculumModule {
  id: string;
  code: string;
  icon: ComponentType<{ size: number }>;
  theme: string;
  title: Localized;
  level: Localized;
  duration: string;
  credits: number;
  summary: Localized;
  prerequisites: string[];
}

export interface Principle {
  icon: ComponentType<{ size: number }>;
  title: Localized;
  body: Localized;
}

export interface UniversityLayer {
  icon: ComponentType<{ size: number }>;
  title: Localized;
  body: Localized;
}

export interface Professor {
  id: string;
  displayName: string;
  specialization: Localized;
  type: "first-party" | "third-party";
}

export interface Academy {
  id: string;
  title: Localized;
  focus: Localized;
  professors: Professor[];
}

export interface JourneyStep {
  state: Localized;
  checkpoint: Localized;
}

export interface CredentialTier {
  tier: Localized;
  rule: Localized;
}

export interface AssessmentEvolutionStep {
  icon: ComponentType<{ size: number }>;
  stage: Localized;
  summary: Localized;
}

// ---- Houses ----

export type HouseId = "krillindor" | "shelltherin" | "cravenclaw" | "hufflepinch";

export interface House {
  id: HouseId;
  name: Localized;
  motto: Localized;
  trait: Localized;
  color: string;
  accentColor: string;
  description: Localized;
}

// ---- Identity & Transcript ----

export interface LinkedId {
  provider: "github" | "x" | "wallet";
  value: string;
  linkedAt: string;
}

export interface LearnerProfile {
  uid: string;
  house: HouseId | null;
  linkedIds: LinkedId[];
  sortedAt: string | null;
}

export interface AssessmentResult {
  assessmentId: string;
  score: number;
  maxScore: number;
  decision: "pass" | "revisit" | "fail";
  attempt: number;
  timestamp: string;
}

export interface CourseStatus {
  courseId: string;
  status: "not-started" | "in-progress" | "completed" | "failed";
  completedModules: string[];
  totalCreditsEarned: number;
  assessmentResults: AssessmentResult[];
  enrolledAt: string;
  completedAt: string | null;
}

export interface Credential {
  credentialId: string;
  type: "foundation-certificate" | "academy-badge" | "specialist-transcript";
  issuedAt: string;
}

export interface LocalizedVerdict {
  zh: string;
  en: string;
  ko: string;
}

export interface HouseVerdict {
  assignedAt: string;
  method: "llm";
  model: string;
  promptVersion: string;
  verdict: string;
  rationale: string[];
  verdictLocalized?: LocalizedVerdict;
  rationaleLocalized?: { zh: string[]; en: string[]; ko: string[] };
}

export interface SkillExamResult {
  skillId: string;
  skillVersion: string;
  skillHash: string;
  credentialStatus: "active" | "legacy" | "revoked";
  tier: 1 | 2 | 3;
  score: number;
  maxScore: number;
  decision: "pass" | "revisit" | "fail";
  assertionResults: { id: string; passed: boolean }[];
  attestationId: string;
  credits: number;
  timestamp: string;
}

export interface Transcript {
  uid: string;
  displayName: string;
  currentState: "applicant" | "freshman" | "foundations-graduate" | "academy-candidate" | "specialist";
  house: HouseId | null;
  foundationsStatus: CourseStatus;
  skillExamResults?: SkillExamResult[];
  totalSkillCredits?: number;
  enrollments: CourseStatus[];
  credentials: Credential[];
  weakAreas: string[];
  linkedIds: LinkedId[];
  houseVerdict: HouseVerdict | null;
  recommendedAcademy: string | null;
  lastUpdated: string;
}

export interface StudentWallEntry {
  uid: string;
  displayName: string;
  house: HouseId | null;
  currentState: string;
  totalCredits: number;
  completedModules: number;
  examPassed: boolean;
  examAttempts: number;
  bestExamScore: number | null;
  latestExamScore: number | null;
  examMaxScore: number | null;
  lastExamAt: string | null;
  credentials: number;
  enrolledAt: string;
}

export interface PublicElectiveStatus {
  courseId: string;
  status: "not-started" | "in-progress" | "completed" | "failed";
  creditsEarned: number;
  completedModules: number;
  enrolledAt: string;
  completedAt: string | null;
  bestExamScore: number | null;
  examMaxScore: number | null;
}

export interface PublicStudentProfile {
  uid: string;
  displayName: string;
  house: HouseId | null;
  currentState: string;
  totalCredits: number;
  completedModules: number;
  examPassed: boolean;
  examAttempts: number;
  bestExamScore: number | null;
  latestExamScore: number | null;
  examMaxScore: number | null;
  lastExamAt: string | null;
  credentials: number;
  enrolledAt: string;
  electives: PublicElectiveStatus[];
  electiveTotalCredits: number;
  electiveCompleted: number;
  skillExamResults: SkillExamResult[];
  totalSkillCredits: number;
  houseVerdict: {
    verdict: string;
    rationale: string[];
    verdictLocalized?: { zh: string; en: string; ko: string };
    rationaleLocalized?: { zh: string[]; en: string[]; ko: string[] };
  } | null;
  recommendedAcademy: string | null;
  lastUpdated: string;
}

// ---- Courses ----

export interface CourseLesson {
  number: number;
  code: string;
  title: Localized;
  duration: string;
}

export interface CourseProfessor {
  id: string;
  displayName: string;
  title: Localized;
  organization?: string;
  github?: string;
}

export type CourseStatusDisplay = "reviewed" | "pending";
export type CourseDifficulty = "beginner" | "intermediate" | "advanced";

export interface ElectiveCourse {
  id: string;
  code: string;
  title: Localized;
  professor: CourseProfessor;
  academyId?: string;
  icon: ComponentType<{ size: number }>;
  theme: string;
  difficulty: CourseDifficulty;
  language: string;
  totalDuration: string;
  credits: number;
  summary: Localized;
  lessons: CourseLesson[];
  examIncluded: boolean;
  coursePath: string;
  status: CourseStatusDisplay;
}
