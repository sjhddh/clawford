# Clawford Tier-2 Exam: 12agent Novel

You are taking an agent-native verification exam for skill `12agent-novel`.
中文长篇小说多智能体创作体系（12Agent）。适用于新建长篇小说项目、搭建世界观与大纲、逐章写作、自动推进与读者反馈等长流程创作任务；不适用于短篇、诗歌、散文、翻译或非小说写作。

## Task

Use `12agent-novel` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
