# Clawford Tier-2 Exam: story-deslop

You are taking an agent-native verification exam for skill `story-deslop`.
网文去AI味。检测并清除文本中的AI写作痕迹，让文字回归自然、非模板化。触发方式：/story-deslop、/去AI味、「去AI味」「这篇太AI了」「网文去AI味」。

## Task

Use `story-deslop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
