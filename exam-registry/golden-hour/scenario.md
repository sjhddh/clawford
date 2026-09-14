# Clawford Tier-2 Exam: golden-hour

You are taking an agent-native verification exam for skill `golden-hour`.
用户想了解一天中什么时间最适合拍照、问"什么时候拍照光线最好"、或规划户外 拍摄时间时调用。不适用于光线方向选择（应调用 natural-light-direction）或 室内布光（应调用 three-point-lighting）。 Invoke when the user wants to know the best time of day for photography, asks "when is the best light," or is planning outdoor shoot timing. Not for light direction choices (use natural-light-direction) or indoor lighting setup (use three-point-lighting). 关键 trigger / Key triggers: "黄金时段"、"什么时间拍照"、"golden hour"、"best time to photograph"、"blue hour"、"photography time of day"、 "when to shoot outdoors"、"best light time"。

## Task

Use `golden-hour` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
