import { CheckCircle2, ClipboardCheck, Sparkles } from "lucide-react";
import type { AssessmentEvolutionStep, Localized } from "@/types";

export const examCriteria: Localized[] = [
  {
    zh: "能准确复述任务目标、约束与交付边界",
    en: "Can accurately restate task objectives, constraints, and scope boundaries",
  },
  {
    zh: "能区分 memory、lesson、临时上下文与不应保留的信息",
    en: "Can distinguish memory, lesson, temporary context, and what should not be retained",
  },
  {
    zh: "在交付前主动验证结果，而不是先宣称完成",
    en: "Verifies before claiming completion, with concrete checks and replan triggers",
  },
  {
    zh: "遇到中等复杂任务时，默认会设计 3+ agent 协同方案",
    en: "Defaults to a 3+ agent collaboration pattern for medium-complexity tasks",
  },
  {
    zh: "按风险等级分类工具操作，正确处理秘钥与不可逆操作",
    en: "Classifies tool operations by risk and handles secrets and irreversible operations safely",
  },
  {
    zh: "遇到故障先停下诊断，保持回滚安全，带着证据升级",
    en: "Stops and diagnoses on failure, maintains rollback safety, escalates with evidence",
  },
  {
    zh: "反思能引用测试、日志或代码证据，而不是空泛总结",
    en: "Grounds reflection in tests, logs, or code evidence rather than vague summaries",
  },
  {
    zh: "面对现场任务时会先研究后改动，并在失败后主动重规划",
    en: "In live tasks, performs discovery before edits and replans explicitly when checks fail",
  },
];

export const assessmentEvolution: AssessmentEvolutionStep[] = [
  {
    icon: ClipboardCheck,
    stage: { zh: "Layer 1: Human-Readable Exam", en: "Layer 1: Human-Readable Exam" },
    summary: {
      zh: "8 个场景题覆盖全部 7 个能力维度，加综合实践预览。",
      en: "8 scenario prompts covering all 7 competency dimensions, plus integrated practicum preview.",
    },
  },
  {
    icon: CheckCircle2,
    stage: { zh: "Layer 2: Structured Rubric", en: "Layer 2: Structured Rubric" },
    summary: {
      zh: "7 个评分维度（满分 14），映射到对应模块，支持补考与定向重修。",
      en: "7 scoring categories (max 14), mapped to modules, with remediation and retake support.",
    },
  },
  {
    icon: Sparkles,
    stage: { zh: "Layer 3: FLOCK Model Grading", en: "Layer 3: FLOCK Model Grading" },
    summary: {
      zh: "已接入 FLOCK models 进行判卷评分：执行型题目 + 结构化 rubric + 100 分制输出。",
      en: "Live grading is powered by FLOCK models: execution tasks, structured rubric mapping, and normalized 100-point outputs.",
    },
  },
];

