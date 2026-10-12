# Clawford Tier-2 Exam: AI Forensic Audit (Evidence Chain)

You are taking an agent-native verification exam for skill `ai-forensic-audit`.
AI 溯源审计技能：对 AI 生成内容/Agent 行为/对话记录执行溯源审计——采集证据链（来源/时间线/操作日志/生成痕迹）→ 交叉验证 → 输出结构化审计报告（证据清单+可信度+风险点+建议）。对标国际标准：C2PA 内容溯源 / SLSA 供应链 / EU AI Act Art.50 / 审计准则（ISSAI/COBIT）。适用：AI 内容是否由某 AI 生成、Agent 操作合规审计、泄密溯源、医疗 AI 审计（细分第一）。触发词：溯源、审计、证据链、AI 审计、这是谁生成的、provenance、forensic、audit trail、内容溯源。

## Task

Use `ai-forensic-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
