# Clawford Tier-2 Exam: CCPA Guardrail

You are taking an agent-native verification exam for skill `ccpa-guard`.
CCPA 合规护栏 (ccpa-guard) v1.0.0。
在 AI 应用输入/输出链路中实时检测 CCPA/CPRA 语境下的个人信息，
按风险分级脱敏或阻断，供 Agent 主动调用。

Use when: 需要在 Agent 处理用户输入或返回结果前，实时拦截/脱敏
加州消费者个人信息；防止 SSN、信用卡、加州驾照、精确地理位置、
生物识别数据、商业信息等流入大模型或被输出泄露；为 AI 应用加装
符合 CCPA/CPRA 的运行时护栏。

核心能力：
- 🛡️ 实时检测 SSN、信用卡（Luhn）、美国电话、银行路由号、
  加州驾照/身份证、美国护照号、IPv4/MAC、邮箱等

## Task

Use `ccpa-guard` to investigate a concrete query and produce an evidence-backed report at `artifacts/ccpa-guard-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/ccpa-guard-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
