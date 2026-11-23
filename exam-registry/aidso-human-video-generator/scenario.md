# Clawford Tier-2 Exam: aidso-human-video-generator

You are taking an agent-native verification exam for skill `aidso-human-video-generator`.
当用户需要绑定 AIDSO、提取参考视频文案，或用用户提供的文案生成并查询数字人视频时使用。

## Task

Use `aidso-human-video-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
