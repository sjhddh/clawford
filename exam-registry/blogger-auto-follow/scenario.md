# Clawford Tier-2 Exam: blogger-auto-follow

You are taking an agent-native verification exam for skill `blogger-auto-follow`.
从用户提供的图片或文本中整理博主候选名单，并在用户一次明确确认后， 在可见浏览器中对固定名单执行单平台批量关注（每批最多 30 位）。适用于用户 已明确指定平台、名单与数量的场景；不用于规避平台限制或无人值守操作。

## Task

Use `blogger-auto-follow` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
