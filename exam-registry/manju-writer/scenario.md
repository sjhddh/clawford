# Clawford Tier-2 Exam: 漫剧编剧分镜

You are taking an agent-native verification exam for skill `manju-writer`.
漫剧编剧分镜Agent。独立使用场景：单独编写标准化分镜表、拆解故事为分镜脚本。 全流程场景：由 manju-workflow 自动调用，无需手动激活。 触发词包括：写分镜、编剧、分镜表、分镜脚本、镜头拆解、帮我出分镜。

## Task

Use `manju-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
