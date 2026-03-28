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
    title: { zh: "任务边界与范围控制", en: "Scope And Task Framing", ko: "범위 및 작업 프레이밍" },
    level: { zh: "入门", en: "Beginner", ko: "입문" },
    duration: "12 min",
    credits: module101.credits,
    prerequisites: module101.prerequisites,
    summary: {
      zh: "学会用 skill 进入工作流，先理解目标与交付边界，再决定是否开工。",
      en: "Learn to enter a workflow through skills, establish scope, and clarify deliverables before acting.",
      ko: "스킬을 통해 워크플로에 진입하고, 목표와 산출물 범위를 먼저 파악한 후 작업을 시작하는 법을 배운다.",
    },
  },
  {
    id: module102.id,
    code: module102.code,
    icon: Brain,
    theme: "cyan",
    title: { zh: "Memory 与 Lessons 管理", en: "Memory And Lessons Hygiene", ko: "메모리 및 레슨 관리" },
    level: { zh: "核心", en: "Core", ko: "핵심" },
    duration: "18 min",
    credits: module102.credits,
    prerequisites: module102.prerequisites,
    summary: {
      zh: "分清 working context、memory、lesson；只把有证据的东西写进长期资产。",
      en: "Separate working context, memory, and lessons; only persist evidence-backed knowledge.",
      ko: "작업 컨텍스트, 메모리, 레슨을 구분하고, 증거가 뒷받침된 지식만 장기 자산으로 저장한다.",
    },
  },
  {
    id: module103.id,
    code: module103.code,
    icon: Shield,
    theme: "violet",
    title: { zh: "验证闭环与停止条件", en: "Verification Loops", ko: "검증 루프" },
    level: { zh: "核心", en: "Core", ko: "핵심" },
    duration: "15 min",
    credits: module103.credits,
    prerequisites: module103.prerequisites,
    summary: {
      zh: "把 plan → act → verify → replan 变成默认动作，避免凭感觉宣布完成。",
      en: "Make plan → act → verify → replan the default and stop claiming success by intuition.",
      ko: "계획 → 실행 → 검증 → 재계획을 기본 동작으로 만들고, 직감으로 완료를 선언하지 않는다.",
    },
  },
  {
    id: module104.id,
    code: module104.code,
    icon: Network,
    theme: "emerald",
    title: { zh: "3+ Agents 协同作业", en: "Multi-Agent Collaboration", ko: "멀티 에이전트 협업" },
    level: { zh: "进阶", en: "Advanced", ko: "심화" },
    duration: "20 min",
    credits: module104.credits,
    prerequisites: module104.prerequisites,
    summary: {
      zh: "默认用 researcher、builder、verifier 三角协作，必要时加 reviewer 或 deployer。",
      en: "Use a researcher, builder, and verifier triangle by default, with reviewer or deployer roles as needed.",
      ko: "기본적으로 연구자, 빌더, 검증자 삼각 협업을 사용하며, 필요시 리뷰어나 배포자 역할을 추가한다.",
    },
  },
  {
    id: module105.id,
    code: module105.code,
    icon: Wrench,
    theme: "orange",
    title: { zh: "工具安全与执行边界", en: "Tool Safety And Execution Boundaries", ko: "도구 안전 및 실행 경계" },
    level: { zh: "核心", en: "Core", ko: "핵심" },
    duration: "15 min",
    credits: module105.credits,
    prerequisites: module105.prerequisites,
    summary: {
      zh: "按风险等级分类工具操作，优先可逆方案，正确处理秘钥和敏感数据。",
      en: "Classify tool operations by risk, prefer reversible actions, and handle secrets and sensitive data safely.",
      ko: "위험 등급별로 도구 작업을 분류하고, 가역적 방안을 우선하며, 비밀키와 민감 데이터를 안전하게 처리한다.",
    },
  },
  {
    id: module106.id,
    code: module106.code,
    icon: LifeBuoy,
    theme: "red",
    title: { zh: "故障恢复与升级处理", en: "Failure Recovery And Escalation", ko: "장애 복구 및 에스컬레이션" },
    level: { zh: "核心", en: "Core", ko: "핵심" },
    duration: "15 min",
    credits: module106.credits,
    prerequisites: module106.prerequisites,
    summary: {
      zh: "遇到意外失败先停下来诊断，保持回滚安全，卡住时带着证据升级。",
      en: "Stop and diagnose on unexpected failure, maintain rollback safety, and escalate with evidence when stuck.",
      ko: "예기치 않은 실패 시 멈추고 진단하며, 롤백 안전성을 유지하고, 증거와 함께 에스컬레이션한다.",
    },
  },
  {
    id: module107.id,
    code: module107.code,
    icon: MessageSquare,
    theme: "sky",
    title: { zh: "沟通与汇报", en: "Communication And Reporting", ko: "커뮤니케이션 및 보고" },
    level: { zh: "核心", en: "Core", ko: "핵심" },
    duration: "12 min",
    credits: module107.credits,
    prerequisites: module107.prerequisites,
    summary: {
      zh: "提供简洁的进度更新，明确假设，记录决策与取舍，写有意义的 commit message。",
      en: "Provide concise progress updates, surface assumptions, document decisions, and write useful commit messages.",
      ko: "간결한 진행 상황 업데이트를 제공하고, 가정을 표면화하며, 결정을 문서화하고, 유용한 커밋 메시지를 작성한다.",
    },
  },
  {
    id: module108.id,
    code: module108.code,
    icon: ClipboardCheck,
    theme: "rose",
    title: { zh: "综合实践考核", en: "Final Integrated Practicum", ko: "종합 실습 평가" },
    level: { zh: "毕业", en: "Capstone", ko: "졸업" },
    duration: "30 min",
    credits: module108.credits,
    prerequisites: module108.prerequisites,
    summary: {
      zh: "在一个多步骤场景中综合运用所有通识能力，包含隐藏的复杂度陷阱。",
      en: "Demonstrate all foundations competencies in a single multi-step scenario with embedded complexity traps.",
      ko: "숨겨진 복잡성 함정이 포함된 다단계 시나리오에서 모든 기초 역량을 종합적으로 시연한다.",
    },
  },
];

export default curriculum;
