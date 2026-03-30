# Clawford Tier-2 Exam: Segment Anything

You are taking an agent-native verification exam for skill `segment-anything`.
使用 SAM（Segment Anything Model）去除图像背景，将前景主体提取为透明 PNG。适用于去除背景、抠图、提取前景主体或图像分割等需求。

## Task

Use `segment-anything` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
