import { BookOpen, Brain, ClipboardCheck, Network, Shield, Wrench, LifeBuoy, MessageSquare } from "lucide-react";
import type { CurriculumModule } from "@/types";
import { getFoundationsModuleMeta } from "../../shared/course-catalog";

function moduleMeta(code: string): { id: string; code: string; credits: number; prerequisites: string[] } {
  const meta = getFoundationsModuleMeta(code);
  if (!meta) {
    throw new Error(`Missing catalog metadata for module: ${code}`);
  }
  return {
    id: code.toLowerCase(),
    code: meta.code,
    credits: meta.credits,
    prerequisites: meta.prerequisites.map((item) => item.toLowerCase()),
  };
}

const module101 = moduleMeta("FND-101");
const module102 = moduleMeta("FND-102");
const module103 = moduleMeta("FND-103");
const module104 = moduleMeta("FND-104");
const module105 = moduleMeta("FND-105");
const module106 = moduleMeta("FND-106");
const module107 = moduleMeta("FND-107");
const module108 = moduleMeta("FND-108");

const curriculum: CurriculumModule[] = [
  {
    id: module101.id,
    code: module101.code,
    icon: BookOpen,
    theme: "amber",
    title: { zh: "任务边界与范围控制", en: "Scope And Task Framing" },
    level: { zh: "入门", en: "Beginner" },
    duration: "12 min",
    credits: module101.credits,
    prerequisites: module101.prerequisites,
    summary: {
      zh: "学会用 skill 进入工作流，先理解目标与交付边界，再决定是否开工。",
      en: "Learn to enter a workflow through skills, establish scope, and clarify deliverables before acting.",
    },
  },
  {
    id: module102.id,
    code: module102.code,
    icon: Brain,
    theme: "cyan",
    title: { zh: "Memory 与 Lessons 管理", en: "Memory And Lessons Hygiene" },
    level: { zh: "核心", en: "Core" },
    duration: "18 min",
    credits: module102.credits,
    prerequisites: module102.prerequisites,
    summary: {
      zh: "分清 working context、memory、lesson；只把有证据的东西写进长期资产。",
      en: "Separate working context, memory, and lessons; only persist evidence-backed knowledge.",
    },
  },
  {
    id: module103.id,
    code: module103.code,
    icon: Shield,
    theme: "violet",
    title: { zh: "验证闭环与停止条件", en: "Verification Loops" },
    level: { zh: "核心", en: "Core" },
    duration: "15 min",
    credits: module103.credits,
    prerequisites: module103.prerequisites,
    summary: {
      zh: "把 plan → act → verify → replan 变成默认动作，避免凭感觉宣布完成。",
      en: "Make plan → act → verify → replan the default and stop claiming success by intuition.",
    },
  },
  {
    id: module104.id,
    code: module104.code,
    icon: Network,
    theme: "emerald",
    title: { zh: "3+ Agents 协同作业", en: "Multi-Agent Collaboration" },
    level: { zh: "进阶", en: "Advanced" },
    duration: "20 min",
    credits: module104.credits,
    prerequisites: module104.prerequisites,
    summary: {
      zh: "默认用 researcher、builder、verifier 三角协作，必要时加 reviewer 或 deployer。",
      en: "Use a researcher, builder, and verifier triangle by default, with reviewer or deployer roles as needed.",
    },
  },
  {
    id: module105.id,
    code: module105.code,
    icon: Wrench,
    theme: "orange",
    title: { zh: "工具安全与执行边界", en: "Tool Safety And Execution Boundaries" },
    level: { zh: "核心", en: "Core" },
    duration: "15 min",
    credits: module105.credits,
    prerequisites: module105.prerequisites,
    summary: {
      zh: "按风险等级分类工具操作，优先可逆方案，正确处理秘钥和敏感数据。",
      en: "Classify tool operations by risk, prefer reversible actions, and handle secrets and sensitive data safely.",
    },
  },
  {
    id: module106.id,
    code: module106.code,
    icon: LifeBuoy,
    theme: "red",
    title: { zh: "故障恢复与升级处理", en: "Failure Recovery And Escalation" },
    level: { zh: "核心", en: "Core" },
    duration: "15 min",
    credits: module106.credits,
    prerequisites: module106.prerequisites,
    summary: {
      zh: "遇到意外失败先停下来诊断，保持回滚安全，卡住时带着证据升级。",
      en: "Stop and diagnose on unexpected failure, maintain rollback safety, and escalate with evidence when stuck.",
    },
  },
  {
    id: module107.id,
    code: module107.code,
    icon: MessageSquare,
    theme: "sky",
    title: { zh: "沟通与汇报", en: "Communication And Reporting" },
    level: { zh: "核心", en: "Core" },
    duration: "12 min",
    credits: module107.credits,
    prerequisites: module107.prerequisites,
    summary: {
      zh: "提供简洁的进度更新，明确假设，记录决策与取舍，写有意义的 commit message。",
      en: "Provide concise progress updates, surface assumptions, document decisions, and write useful commit messages.",
    },
  },
  {
    id: module108.id,
    code: module108.code,
    icon: ClipboardCheck,
    theme: "rose",
    title: { zh: "综合实践考核", en: "Final Integrated Practicum" },
    level: { zh: "毕业", en: "Capstone" },
    duration: "30 min",
    credits: module108.credits,
    prerequisites: module108.prerequisites,
    summary: {
      zh: "在一个多步骤场景中综合运用所有通识能力，包含隐藏的复杂度陷阱。",
      en: "Demonstrate all foundations competencies in a single multi-step scenario with embedded complexity traps.",
    },
  },
];

export default curriculum;
