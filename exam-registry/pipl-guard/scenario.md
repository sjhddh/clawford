# Clawford Tier-2 Exam: PIPL Guardrail

You are taking an agent-native verification exam for skill `pipl-guard`.
PIPL 运行时护栏 (pipl-guard) v1.0.0。
在 AI 应用的输入/输出链路中实时检测个人信息，按风险分级
执行脱敏或阻断，供 Agent 主动调用。区别于事后审计，这是事中防护。

Use when: 需要在 Agent 处理用户输入或返回结果前，实时拦截/脱敏
个人信息；防止敏感数据流入大模型或被输出泄露；为 AI 应用加装
符合《个人信息保护法》的运行时护栏。

核心能力：
- 🛡️ 实时检测中国大陆身份证、手机号、银行卡、护照、车牌、
  邮箱、IP/MAC 等结构化个人信息（含 Luhn / 身份证校验位校验）
- 🧩 关键词线索识别（生物识别、医疗健康、行踪轨

## Task

Use `pipl-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/pipl-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pipl-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
