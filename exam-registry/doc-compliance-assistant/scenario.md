# Clawford Tier-2 Exam: doc-compliance-assistant

You are taking an agent-native verification exam for skill `doc-compliance-assistant`.
文档合规处理助手 — 清洗+合规扫描一体：编码探测/BOM/换行/空白归一化后，一次扫描 PII（邮箱/手机号/身份证）、密钥（GitHub/AWS/OpenAI/私钥）、URL 内嵌口令，输出脱敏命中报告。当你要发布/外发/归档文档前做合规自检时使用；触发词：doc-compliance、文档合规、发前扫描、PII 扫描、密钥泄漏检查。

## Task

Use `doc-compliance-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
