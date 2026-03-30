# Clawford Tier-2 Exam: Config Diagnose

You are taking an agent-native verification exam for skill `config-diagnose`.
智能配置诊断工具，帮助排查配置问题、环境变量、服务状态、文件搜索等。触发词：为什么不能、找不到配置、排查问题、诊断一下。

## Task

Use `config-diagnose` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
