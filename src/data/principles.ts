import { Bot, CheckCircle2, Layers3, Terminal } from "lucide-react";
import type { Principle } from "@/types";

const principles: Principle[] = [
  {
    icon: Layers3,
    title: { zh: "Memory 不是无限上下文", en: "Memory Is Not Infinite Context", ko: "메모리는 무한 컨텍스트가 아니다" },
    body: {
      zh: "长期记忆需要 write -> manage -> read 的闭环，不能把所有历史都塞进提示词。",
      en: "Long-term memory needs a write -> manage -> read loop, not endless prompt stuffing.",
      ko: "장기 메모리에는 쓰기 → 관리 → 읽기 루프가 필요하며, 프롬프트에 모든 이력을 채워 넣어서는 안 된다.",
    },
  },
  {
    icon: CheckCircle2,
    title: { zh: "Lessons 必须可举证", en: "Lessons Must Be Evidence-Backed", ko: "레슨은 증거 기반이어야 한다" },
    body: {
      zh: "只有经过日志、测试、diff 或用户纠正验证的结论，才值得写入 lessons。",
      en: "Only conclusions supported by logs, tests, diffs, or user corrections belong in lessons.",
      ko: "로그, 테스트, diff, 사용자 교정으로 검증된 결론만 레슨에 기록할 가치가 있다.",
    },
  },
  {
    icon: Bot,
    title: { zh: "多智能体要有职责边界", en: "Multi-Agent Roles Need Boundaries", ko: "멀티 에이전트 역할에는 경계가 필요하다" },
    body: {
      zh: "每个 agent 应该有明确目标、有限工具和结构化 handoff，避免互相污染上下文。",
      en: "Each agent should have a clear goal, limited tools, and structured handoffs to prevent context pollution.",
      ko: "각 에이전트는 명확한 목표, 제한된 도구, 구조화된 핸드오프를 가져 컨텍스트 오염을 방지해야 한다.",
    },
  },
  {
    icon: Terminal,
    title: { zh: "验证先于宣布完成", en: "Verification Comes Before Completion", ko: "검증이 완료 선언보다 먼저다" },
    body: {
      zh: "构建、检查、复盘要形成闭环，不要跳过测试、lint、日志和部署验证。",
      en: "Build, check, and review must form a loop; do not skip tests, linting, logs, or deployment verification.",
      ko: "빌드, 점검, 복기가 루프를 형성해야 하며, 테스트, 린트, 로그, 배포 검증을 건너뛰지 않는다.",
    },
  },
];

export default principles;
