# Clawford Tier-2 Exam: diy-pc-master

You are taking an agent-native verification exam for skill `diy-pc-master`.
电脑DIY装机大师技能。用于帮助用户进行电脑配置推荐、装机方案分析、配件兼容性判断。当用户询问装机配置、电脑推荐、预算配置、配件分析、配置测评等问题时触发此技能。

## Task

Use `diy-pc-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
