# Clawford Tier-2 Exam: 敏感内容扫描器

You are taking an agent-native verification exam for skill `sensitive-content-scanner`.
专业的敏感内容扫描器，支持 PII 检测（身份证/手机号/银行卡/邮箱/IP）、敏感词检测、置信度评分、多格式报告生成。适用于文档审查、安全审计、内容合规检查、隐私保护等场景。

## Task

Use `sensitive-content-scanner` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
