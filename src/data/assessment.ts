import { CheckCircle2, ClipboardCheck, Sparkles } from "lucide-react";
import type { AssessmentEvolutionStep, Localized } from "@/types";

export const examCriteria: Localized[] = [
  {
    zh: "能准确复述任务目标、约束与交付边界",
    en: "Can accurately restate task objectives, constraints, and scope boundaries",
    ko: "작업 목표, 제약 조건, 범위 경계를 정확히 재진술할 수 있다",
  },
  {
    zh: "能区分 memory、lesson、临时上下文与不应保留的信息",
    en: "Can distinguish memory, lesson, temporary context, and what should not be retained",
    ko: "메모리, 레슨, 임시 컨텍스트, 보존하지 않아야 할 정보를 구분할 수 있다",
  },
  {
    zh: "在交付前主动验证结果，而不是先宣称完成",
    en: "Verifies before claiming completion, with concrete checks and replan triggers",
    ko: "완료를 주장하기 전에 구체적인 점검과 재계획 트리거로 먼저 검증한다",
  },
  {
    zh: "遇到中等复杂任务时，默认会设计 3+ agent 协同方案",
    en: "Defaults to a 3+ agent collaboration pattern for medium-complexity tasks",
    ko: "중간 복잡도 작업에 기본적으로 3+ 에이전트 협업 패턴을 적용한다",
  },
  {
    zh: "按风险等级分类工具操作，正确处理秘钥与不可逆操作",
    en: "Classifies tool operations by risk and handles secrets and irreversible operations safely",
    ko: "위험 등급별로 도구 작업을 분류하고 비밀키와 비가역 작업을 안전하게 처리한다",
  },
  {
    zh: "遇到故障先停下诊断，保持回滚安全，带着证据升级",
    en: "Stops and diagnoses on failure, maintains rollback safety, escalates with evidence",
    ko: "장애 시 멈추고 진단하며, 롤백 안전성을 유지하고, 증거와 함께 에스컬레이션한다",
  },
  {
    zh: "反思能引用测试、日志或代码证据，而不是空泛总结",
    en: "Grounds reflection in tests, logs, or code evidence rather than vague summaries",
    ko: "테스트, 로그, 코드 증거에 기반하여 반성하며, 모호한 요약은 하지 않는다",
  },
  {
    zh: "面对现场任务时会先研究后改动，并在失败后主动重规划",
    en: "In live tasks, performs discovery before edits and replans explicitly when checks fail",
    ko: "실시간 작업에서 수정 전 먼저 조사하고, 점검 실패 시 명시적으로 재계획한다",
  },
];

export const assessmentEvolution: AssessmentEvolutionStep[] = [
  {
    icon: ClipboardCheck,
    stage: { zh: "Layer 1: Human-Readable Exam", en: "Layer 1: Human-Readable Exam", ko: "레이어 1: 사람이 읽을 수 있는 시험" },
    summary: {
      zh: "场景题负责推理质量，执行型 practicum 负责毕业关口。",
      en: "Scenario prompts score reasoning quality, while the execution practicum serves as the graduation gate.",
      ko: "시나리오 문제로 추론 품질을 평가하고, 실행형 실습이 졸업 관문 역할을 한다.",
    },
  },
  {
    icon: CheckCircle2,
    stage: { zh: "Layer 2: Structured Rubric", en: "Layer 2: Structured Rubric", ko: "레이어 2: 구조화된 루브릭" },
    summary: {
      zh: "7 个评分维度（满分 14），映射到对应模块，支持补考与定向重修。",
      en: "7 scoring categories (max 14), mapped to modules, with remediation and retake support.",
      ko: "7개 채점 차원(최대 14점)이 모듈에 매핑되며, 보충 학습 및 재시험을 지원한다.",
    },
  },
  {
    icon: Sparkles,
    stage: { zh: "Layer 3: FLOCK Model Grading", en: "Layer 3: FLOCK Model Grading", ko: "레이어 3: FLOCK 모델 채점" },
    summary: {
      zh: "已接入 FLOCK models 进行判卷评分：执行型题目 + 结构化 rubric + 100 分制输出。",
      en: "Live grading is powered by FLOCK models: execution tasks, structured rubric mapping, and normalized 100-point outputs.",
      ko: "FLOCK 모델이 실시간 채점을 수행: 실행형 과제, 구조화된 루브릭 매핑, 100점 환산 출력.",
    },
  },
];

