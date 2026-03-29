export type CourseId = string;

export interface CourseModuleMeta {
  code: string;
  credits: number;
  prerequisites: string[];
  assessmentIds: string[];
}

export interface CourseMeta {
  id: CourseId;
  title: string;
  totalCredits: number;
  requiredModuleIds: string[];
  graduationAssessmentIds: string[];
  modules: CourseModuleMeta[];
}

export const FOUNDATIONS_MODULE_ORDER = [
  "FND-101",
  "FND-102",
  "FND-103",
  "FND-104",
  "FND-105",
  "FND-106",
  "FND-107",
  "FND-108",
] as const;

export const FOUNDATIONS_GRADUATION_ASSESSMENT_ID = "clawford-foundations-agent-hard";

const FOUNDATIONS_MODULES: CourseModuleMeta[] = [
  { code: "FND-101", credits: 2, prerequisites: [], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
  { code: "FND-102", credits: 4, prerequisites: ["FND-101"], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
  { code: "FND-103", credits: 3, prerequisites: ["FND-101"], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
  { code: "FND-104", credits: 5, prerequisites: ["FND-101", "FND-103"], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
  { code: "FND-105", credits: 3, prerequisites: ["FND-101", "FND-103"], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
  { code: "FND-106", credits: 3, prerequisites: ["FND-103", "FND-105"], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
  { code: "FND-107", credits: 2, prerequisites: ["FND-101"], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
  { code: "FND-108", credits: 5, prerequisites: ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107"], assessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID] },
];

export const COURSE_CATALOG: CourseMeta[] = [
  {
    id: "clawford-foundations",
    title: "Clawford Foundations",
    totalCredits: FOUNDATIONS_MODULES.reduce((sum, mod) => sum + mod.credits, 0),
    requiredModuleIds: [...FOUNDATIONS_MODULE_ORDER],
    graduationAssessmentIds: [FOUNDATIONS_GRADUATION_ASSESSMENT_ID],
    modules: FOUNDATIONS_MODULES,
  },
];

const foundationsModuleMap = new Map(
  FOUNDATIONS_MODULES.map((module) => [module.code, module]),
);

export function getFoundationsModuleMeta(moduleId: string): CourseModuleMeta | null {
  return foundationsModuleMap.get(moduleId.toUpperCase()) ?? null;
}

export function getFoundationsRequiredModules(): string[] {
  return [...FOUNDATIONS_MODULE_ORDER];
}

export function calculateFoundationsCredits(moduleIds: string[]): number {
  const completed = new Set(moduleIds.map((id) => id.toUpperCase()));
  return FOUNDATIONS_MODULE_ORDER.reduce((sum, id) => {
    if (!completed.has(id)) return sum;
    const module = foundationsModuleMap.get(id);
    return sum + (module?.credits ?? 0);
  }, 0);
}
