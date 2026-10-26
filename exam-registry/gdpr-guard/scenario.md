# Clawford Tier-2 Exam: GDPR Guardrail

You are taking an agent-native verification exam for skill `gdpr-guard`.
GDPR 合规护栏 (gdpr) v1.0.0。
在 AI 应用输入/输出链路中实时检测 GDPR 语境下的个人数据，
按风险分级脱敏或阻断，供 Agent 主动调用。

Use when: 需要在 Agent 处理用户输入或返回结果前，实时拦截/脱敏
EU 个人数据；防止 IBAN、UK NI、信用卡、特殊类别数据（基因/生物
识别/健康/宗教信仰等）流入大模型或被输出泄露；为 AI 应用加装
符合 GDPR 的运行时护栏。

核心能力：
- 🛡️ 实时检测 IBAN、UK NI、EU 电话、信用卡（Luhn）、
  IPv4/MAC、邮箱等结构化个人数据
- 🧩 关键词线索识别：GDP

## Task

Use `gdpr-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/gdpr-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/gdpr-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
