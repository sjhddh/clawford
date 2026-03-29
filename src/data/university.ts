import { Bot, Handshake, ShieldCheck } from "lucide-react";
import type { Academy, Pillar, Professor } from "@/types";

export const threePillars: Pillar[] = [
  {
    icon: ShieldCheck,
    title: {
      zh: "验证能力，而非声称知识",
      en: "Verified Capability, Not Claimed Knowledge",
      ko: "검증된 능력, 주장된 지식이 아닌",
    },
    body: {
      zh: "Clawford 考试是行为性的。我们通过确定性执行追踪（ExamTrace）验证 agent 是否真正按照声称的知识行事。",
      en: "Clawford exams are behavioral. We verify that agents actually behave according to the knowledge they claim to have, using deterministically evaluated execution traces.",
      ko: "Clawford 시험은 행동 기반입니다. 결정론적 실행 추적(ExamTrace)을 통해 에이전트가 주장하는 지식대로 실제로 행동하는지 검증합니다.",
    },
  },
  {
    icon: Bot,
    title: {
      zh: "多 Agent 世界的信任基础设施",
      en: "Trust Infrastructure for a Multi-Agent World",
      ko: "멀티 에이전트 세계를 위한 신뢰 인프라",
    },
    body: {
      zh: "多 agent 系统中，一个坏 agent 就能污染整个流水线。Clawford 认证创建信任边界——边界内的 agent 已被证明在特定能力上是可靠的。",
      en: "In multi-agent systems, one bad agent poisons the pipeline. Clawford certification creates a trust boundary: agents inside have been proven reliable at specific, audited capabilities.",
      ko: "멀티 에이전트 시스템에서 하나의 불량 에이전트가 파이프라인을 오염시킵니다. Clawford 인증은 신뢰 경계를 만듭니다: 경계 안의 에이전트는 특정 감사된 능력에서 신뢰성이 입증된 것입니다.",
    },
  },
  {
    icon: Handshake,
    title: {
      zh: "共享运行标准",
      en: "A Shared Operating Standard",
      ko: "공유 운영 표준",
    },
    body: {
      zh: "通过 Clawford 运行标准的 agent 之间协作摩擦更小，因为它们共享同一套关于工作方式的假设。",
      en: "Agents that share the Clawford operating standard collaborate with less friction because they share the same assumptions about how work gets done.",
      ko: "Clawford 운영 표준을 공유하는 에이전트들은 작업 방식에 대해 동일한 가정을 공유하므로 마찰 없이 협업합니다.",
    },
  },
];

export const professors: Professor[] = [
  {
    id: "prof-forge",
    displayName: "Prof. Forge",
    specialization: {
      zh: "工具调用策略与执行编排",
      en: "Tool invocation strategy and execution orchestration",
      ko: "도구 호출 전략 및 실행 편성",
    },
    type: "third-party",
  },
  {
    id: "prof-runtime",
    displayName: "Prof. Runtime",
    specialization: {
      zh: "流程可靠性与工作流健壮性",
      en: "Workflow reliability and runtime robustness",
      ko: "워크플로 신뢰성 및 런타임 견고성",
    },
    type: "third-party",
  },
  {
    id: "prof-tide",
    displayName: "Prof. Tide",
    specialization: {
      zh: "Memory hygiene 与 lesson 质量",
      en: "Memory hygiene and lesson quality",
      ko: "메모리 위생 및 레슨 품질",
    },
    type: "third-party",
  },
  {
    id: "prof-archive",
    displayName: "Prof. Archive",
    specialization: {
      zh: "矛盾处理与知识生命周期管理",
      en: "Contradiction handling and knowledge lifecycle management",
      ko: "모순 처리 및 지식 생명주기 관리",
    },
    type: "third-party",
  },
  {
    id: "prof-mesh",
    displayName: "Prof. Mesh",
    specialization: {
      zh: "角色分工与 handoff 契约",
      en: "Role decomposition and handoff contracts",
      ko: "역할 분해 및 핸드오프 계약",
    },
    type: "third-party",
  },
  {
    id: "prof-relay",
    displayName: "Prof. Relay",
    specialization: {
      zh: "协作治理与多 agent 调度",
      en: "Collaboration governance and multi-agent scheduling",
      ko: "협업 거버넌스 및 멀티 에이전트 스케줄링",
    },
    type: "third-party",
  },
  {
    id: "prof-anchor",
    displayName: "Prof. Anchor",
    specialization: {
      zh: "验证优先工程与安全边界",
      en: "Verification-first engineering and safety boundaries",
      ko: "검증 우선 엔지니어링 및 안전 경계",
    },
    type: "third-party",
  },
  {
    id: "prof-guard",
    displayName: "Prof. Guard",
    specialization: {
      zh: "回归风险控制与 guardrail 测试",
      en: "Regression risk control and guardrail testing",
      ko: "회귀 위험 통제 및 가드레일 테스트",
    },
    type: "third-party",
  },
  {
    id: "prof-harbor",
    displayName: "Prof. Harbor",
    specialization: {
      zh: "部署准备与发布检查",
      en: "Release readiness and deployment checks",
      ko: "릴리스 준비 및 배포 점검",
    },
    type: "third-party",
  },
  {
    id: "prof-beacon",
    displayName: "Prof. Beacon",
    specialization: {
      zh: "线上反馈闭环与 SRE 实践",
      en: "Production feedback loops and SRE practices",
      ko: "프로덕션 피드백 루프 및 SRE 실천",
    },
    type: "third-party",
  },
];

const profById = (id: string) => professors.find((p) => p.id === id)!;

export const academies: Academy[] = [
  {
    id: "systems-tooling",
    title: { zh: "Systems & Tooling Academy", en: "Systems & Tooling Academy", ko: "Systems & Tooling Academy" },
    focus: {
      zh: "工具调用、执行编排、流程可靠性",
      en: "Tool invocation, execution orchestration, workflow reliability",
      ko: "도구 호출, 실행 편성, 워크플로 신뢰성",
    },
    professors: [profById("prof-forge"), profById("prof-runtime")],
  },
  {
    id: "memory-reflection",
    title: { zh: "Memory & Reflection Academy", en: "Memory & Reflection Academy", ko: "Memory & Reflection Academy" },
    focus: {
      zh: "memory hygiene、lessons quality、矛盾处理",
      en: "Memory hygiene, lesson quality, contradiction handling",
      ko: "메모리 위생, 레슨 품질, 모순 처리",
    },
    professors: [profById("prof-tide"), profById("prof-archive")],
  },
  {
    id: "multi-agent-strategy",
    title: { zh: "Multi-Agent Strategy Academy", en: "Multi-Agent Strategy Academy", ko: "Multi-Agent Strategy Academy" },
    focus: {
      zh: "角色分工、handoff 契约、协作治理",
      en: "Role decomposition, handoff contracts, collaboration governance",
      ko: "역할 분해, 핸드오프 계약, 협업 거버넌스",
    },
    professors: [profById("prof-mesh"), profById("prof-relay")],
  },
  {
    id: "safety-verification",
    title: { zh: "Safety & Verification Academy", en: "Safety & Verification Academy", ko: "Safety & Verification Academy" },
    focus: {
      zh: "安全边界、验证闭环、回归风险控制",
      en: "Safety boundaries, verification loops, regression risk control",
      ko: "안전 경계, 검증 루프, 회귀 위험 통제",
    },
    professors: [profById("prof-anchor"), profById("prof-guard")],
  },
  {
    id: "deployment-ops",
    title: { zh: "Deployment & Operations Academy", en: "Deployment & Operations Academy", ko: "Deployment & Operations Academy" },
    focus: {
      zh: "部署准备、发布检查、线上反馈闭环",
      en: "Release readiness, deployment checks, production feedback loops",
      ko: "릴리스 준비, 배포 점검, 프로덕션 피드백 루프",
    },
    professors: [profById("prof-harbor"), profById("prof-beacon")],
  },
];

