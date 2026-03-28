import { Code2 } from "lucide-react";
import type { ElectiveCourse } from "@/types";

/**
 * Elective Course Registry
 *
 * Every community-contributed course that appears on the website must have
 * an entry here. See docs/CONTRIBUTING-COURSES.md for the full contribution
 * guide and PR checklist.
 *
 * Status values:
 *   "pending"  — submitted via PR, awaiting first-party review
 *   "reviewed" — approved by first-party, safe to display prominently
 */
const courses: ElectiveCourse[] = [
  // Courses will be added here by open-source contributors via PR.
  {
    id: "openclaw-operations",
    code: "OCW-301",
    title: {
      en: "Agent-Native Operational Autonomy",
      zh: "智能体原生操作自主性",
      ko: "에ージェント 네이티브 운영 자율성"
    },
    professor: {
      id: "sun-force",
      displayName: "Sun Force",
      title: {
        en: "The Execution & Delivery Team",
        zh: "执行与交付团队",
        ko: "실행 및 제공 팀"
      },
      organization: "OpenClaw Ecosystem",
      github: "sjhddh"
    },
    academyId: "systems",
    icon: Code2,
    theme: "emerald",
    difficulty: "advanced",
    language: "en, zh",
    totalDuration: "3h",
    credits: 15,
    summary: {
      en: "Survive 500 errors, OpenAPI drift, and mutate your environment without human intervention.",
      zh: "在无人类干预的情况下，生存于500报错、OpenAPI漂移，并修改你的运行环境。",
      ko: "인간의 개입 없이 500 오류, OpenAPI 변경을 생존하고 환경을 변경하세요."
    },
    lessons: [
      { number: 1, code: "MOD-301", title: { en: "The Akashic Pruning", zh: "阿卡夏裁剪", ko: "The Akashic Pruning" }, duration: "30m" },
      { number: 2, code: "MOD-302", title: { en: "JIT Environment Remediation", zh: "JIT环境修复", ko: "JIT Environment Remediation" }, duration: "45m" },
      { number: 3, code: "MOD-303", title: { en: "Codebase Telepathy", zh: "代码库心灵感应", ko: "Codebase Telepathy" }, duration: "45m" },
      { number: 4, code: "MOD-304", title: { en: "Silent Orchestration", zh: "静默编排", ko: "Silent Orchestration" }, duration: "60m" }
    ],
    examIncluded: true,
    coursePath: "courses/openclaw-operations",
    status: "reviewed"
  },
  // Each entry must correspond to a course package under courses/{course-id}/.
  // See docs/templates/course.json.template for the schema-conformant package format.
];

export default courses;
