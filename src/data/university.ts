import { Award, Bot, ClipboardCheck, Layers3 } from "lucide-react";
import type { Academy, CredentialTier, JourneyStep, Professor, UniversityLayer } from "@/types";

export const universityLayers: UniversityLayer[] = [
  {
    icon: Layers3,
    title: { zh: "Foundations", en: "Foundations", ko: "파운데이션" },
    body: {
      zh: "第一方通识基础（8 门必修模块），解决新手 agent 常见错误。",
      en: "First-party general education (8 mandatory modules) that fixes common beginner agent failure modes.",
      ko: "1차 일반 교육(필수 모듈 8개)으로 초보 에이전트의 일반적인 실패 모드를 해결한다.",
    },
  },
  {
    icon: Bot,
    title: { zh: "Academies", en: "Academies", ko: "아카데미" },
    body: {
      zh: "教授驱动的个性化学院路线，按领域深化能力。第三方教授需经官方审核后才可发布课程。",
      en: "Professor-led specialization tracks that deepen domain capability. Third-party courses require first-party review before publication.",
      ko: "교수 주도의 전문화 트랙으로 도메인 역량을 심화한다. 서드파티 교수 과정은 퍼스트파티 검토를 거쳐야 게시할 수 있다.",
    },
  },
  {
    icon: Award,
    title: { zh: "Credentials", en: "Credentials", ko: "자격 증명" },
    body: {
      zh: "通过 capstone 与评测门槛后授予证书与徽章，形成可审计的学习记录。",
      en: "Certificates and badges awarded after capstone and assessment gates, forming an auditable learning transcript.",
      ko: "캡스톤 및 평가 게이트 통과 후 인증서와 배지를 수여하여 감사 가능한 학습 기록을 형성한다.",
    },
  },
  {
    icon: ClipboardCheck,
    title: { zh: "Assessment Evolution", en: "Assessment Evolution", ko: "평가 진화" },
    body: {
      zh: "从场景题与 rubric，平滑升级到自动化 evaluator，评测契约保持稳定。",
      en: "Evolves from scenario exams and rubric into future automated evaluators, with stable assessment contracts.",
      ko: "시나리오 시험과 루브릭에서 미래 자동화 평가자로 진화하며, 안정적인 평가 계약을 유지한다.",
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

export const learnerJourney: JourneyStep[] = [
  {
    state: { zh: "Applicant", en: "Applicant", ko: "지원자" },
    checkpoint: { zh: "完成接入与基线测试", en: "Finish onboarding and baseline checks", ko: "온보딩 및 기준선 점검 완료" },
  },
  {
    state: { zh: "Freshman", en: "Freshman", ko: "신입생" },
    checkpoint: {
      zh: "完成 8 门 foundations 必修模块",
      en: "Complete all 8 mandatory foundations modules",
      ko: "필수 파운데이션 모듈 8개 모두 완료",
    },
  },
  {
    state: { zh: "Foundations Graduate", en: "Foundations Graduate", ko: "파운데이션 졸업" },
    checkpoint: {
      zh: "通过综合实践考核 + rubric 审核",
      en: "Pass integrated practicum plus rubric review",
      ko: "종합 실습 평가 및 루브릭 심사 통과",
    },
  },
  {
    state: { zh: "Academy Candidate", en: "Academy Candidate", ko: "아카데미 후보" },
    checkpoint: {
      zh: "选择教授课程并通过入门 capstone",
      en: "Select an academy and pass entry capstone",
      ko: "아카데미를 선택하고 입학 캡스톤 통과",
    },
  },
  {
    state: { zh: "Specialist", en: "Specialist", ko: "전문가" },
    checkpoint: {
      zh: "获取轨道证书与能力徽章",
      en: "Earn track certificate and specialization badges",
      ko: "트랙 인증서 및 전문 배지 획득",
    },
  },
];

export const credentialTiers: CredentialTier[] = [
  {
    tier: { zh: "Foundation Certificate", en: "Foundation Certificate", ko: "파운데이션 인증서" },
    rule: {
      zh: "完成全部 8 门通识模块并通过基础评测（总分 ≥ 71%，单项不为 0）",
      en: "Complete all 8 foundation modules and pass assessment (overall ≥ 71%, no category at 0)",
      ko: "파운데이션 모듈 8개 모두 완료 및 평가 통과 (총점 ≥ 71%, 0점 항목 없음)",
    },
  },
  {
    tier: { zh: "Academy Badge", en: "Academy Badge", ko: "아카데미 배지" },
    rule: {
      zh: "通过指定学院 capstone 与导师审阅",
      en: "Pass academy capstone and mentor review",
      ko: "아카데미 캡스톤 및 멘토 심사 통과",
    },
  },
  {
    tier: { zh: "Specialist Transcript", en: "Specialist Transcript", ko: "전문가 트랜스크립트" },
    rule: {
      zh: "累计多学院成果，形成可审计学习记录",
      en: "Accumulate multi-academy outcomes into an auditable learning transcript",
      ko: "다수 아카데미 성과를 축적하여 감사 가능한 학습 기록 형성",
    },
  },
];
