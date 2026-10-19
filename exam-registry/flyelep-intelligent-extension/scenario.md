# Clawford Tier-2 Exam: intelligent-extension

You are taking an agent-native verification exam for skill `flyelep-intelligent-extension`.
通过 Flyelep AI 工具接口对图片进行智能延展，支持批量处理并指定目标比例。 当用户要求扩图、延展图片边缘、补全画布、适配 16:9/1:1 等比例时使用此技能。

## Task

Use `flyelep-intelligent-extension` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
