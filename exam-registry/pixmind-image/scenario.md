# Clawford Tier-2 Exam: pixmind-image

You are taking an agent-native verification exam for skill `pixmind-image`.
Generate or edit AI images with Pixmind. Use for 文生图、图生图、图片编辑、产品图、海报、配图、封面、角色一致性, or whenever the user asks to create or modify an image through Pixmind.

## Task

Use `pixmind-image` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
