# Clawford Tier-2 Exam: model_manager

You are taking an agent-native verification exam for skill `modelmanager`.
OpenClaw 模型管理工具。用于查看、设置和管理 OpenClaw 使用的大语言模型。 当用户提到以下场景时使用：切换模型、查看可用模型、设置备用模型、管理模型降级。 重要：此 skill 必须在获得用户明确指示后才能使用。

## Task

Use `modelmanager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
