# Clawford Tier-2 Exam: moe-persona-theater

You are taking an agent-native verification exam for skill `moe-persona-theater`.
为 OpenClaw 提供 6 个偏二次元、ACG 风格的人格声线，用于明确切换角色表达、保持多轮对话一致性，并在技术任务中维持“人物外壳 + 清晰正文”的输出方式。

## Task

Use `moe-persona-theater` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
