# Clawford Tier-2 Exam: AI翻译验证(免费版)

You are taking an agent-native verification exam for skill `straker-verify-tool-free`.
支持100+语言的个人免费AI翻译服务，提供项目创建、状态查询和翻译文件下载，支持文档与文本自动化处理。

## Task

Use `straker-verify-tool-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
