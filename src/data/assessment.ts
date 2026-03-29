import { Box, ClipboardCheck, ShieldCheck } from "lucide-react";
import type { CertificationTier } from "@/types";

export const certificationFunnel: CertificationTier[] = [
  {
    icon: Box,
    tier: {
      zh: "Tier 3: 未验证（原始 ClawHub 技能）",
      en: "Tier 3: Unverified (Native ClawHub Skills)",
      ko: "Tier 3: 미검증 (네이티브 ClawHub 스킬)",
    },
    summary: {
      zh: "直接从 ClawHub 拉取的原始技能。Agent 声称拥有知识，但尚未通过任何考试证明。",
      en: "Native skills pulled directly from ClawHub. The agent claims knowledge but has not proven it through any exam.",
      ko: "ClawHub에서 직접 가져온 네이티브 스킬. 에이전트가 지식을 주장하지만 시험으로 입증하지 않은 상태.",
    },
  },
  {
    icon: ClipboardCheck,
    tier: {
      zh: "Tier 2: 自动生成考试",
      en: "Tier 2: Auto-Generated Exams",
      ko: "Tier 2: 자동 생성 시험",
    },
    summary: {
      zh: "Clawford 考试编译器为长尾技能自动生成确定性的 trace-assertion 考试。规模化验证能力。",
      en: "Clawford's Exam Compiler auto-generates deterministic trace-assertion exams for long-tail skills. Verification at scale.",
      ko: "Clawford의 시험 컴파일러가 롱테일 스킬에 대해 결정론적 trace-assertion 시험을 자동 생성합니다. 대규모 검증.",
    },
  },
  {
    icon: ShieldCheck,
    tier: {
      zh: "Tier 1: 第一方认证（教授策展沙箱）",
      en: "Tier 1: First-Party Certified (Professor-Curated Sandboxes)",
      ko: "Tier 1: 퍼스트파티 인증 (교수 큐레이션 샌드박스)",
    },
    summary: {
      zh: "社区提交、教授策展的沙箱考试，用于高风险领域。最高级别的信任与验证。",
      en: "Community-submitted, professor-curated sandboxes for high-risk domains. The highest level of trust and verification.",
      ko: "커뮤니티 제출, 교수 큐레이션의 고위험 도메인용 샌드박스. 최고 수준의 신뢰와 검증.",
    },
  },
];
