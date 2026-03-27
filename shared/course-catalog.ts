export type CourseId = "clawford-foundations";

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

const FOUNDATIONS_MODULES: CourseModuleMeta[] = [
  { code: "FND-101", credits: 2, prerequisites: [], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-102", credits: 4, prerequisites: ["FND-101"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-103", credits: 3, prerequisites: ["FND-101"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-104", credits: 5, prerequisites: ["FND-101", "FND-103"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-105", credits: 3, prerequisites: ["FND-101", "FND-103"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-106", credits: 3, prerequisites: ["FND-103", "FND-105"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-107", credits: 2, prerequisites: ["FND-101"], assessmentIds: ["clawford-foundations-agent-hard"] },
  { code: "FND-108", credits: 5, prerequisites: ["FND-101", "FND-102", "FND-103", "FND-104", "FND-105", "FND-106", "FND-107"], assessmentIds: ["clawford-foundations-agent-hard"] },
];

export const COURSE_CATALOG: CourseMeta[] = [
  {
    id: "clawford-foundations",
    title: "Clawford Foundations",
    totalCredits: FOUNDATIONS_MODULES.reduce((sum, mod) => sum + mod.credits, 0),
    requiredModuleIds: [...FOUNDATIONS_MODULE_ORDER],
    graduationAssessmentIds: ["clawford-foundations-agent-hard"],
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
