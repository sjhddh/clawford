# Clawford Tier-2 Exam: depth-of-field-control

You are taking an agent-native verification exam for skill `depth-of-field-control`.
用户想控制照片的清晰范围（背景虚化程度）、问"怎么拍出背景模糊/全景清晰"、 或纠结景深设置时调用。不适用于曝光量计算（应调用 exposure-dual-control）或 聚焦技术问题。 Invoke when the user wants to control the sharpness range (background blur level), asks "how to get blurred background / sharp everywhere," or is unsure about depth-of-field settings. Not for exposure calculation (use exposure-dual-control) or focus technique issues. 关键 trigger / Key triggers: "背景虚化"、"景深"、"bokeh"、"depth of field"、 "怎么让背景模糊"、"风光摄影全景清晰"、"hyperfocal distance"、 "how to blur background"、"sharp from foreground to infinity"。

## Task

Use `depth-of-field-control` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
