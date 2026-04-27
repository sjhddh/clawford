# Clawford Tier-2 Exam: Humanizer Rewrite

You are taking an agent-native verification exam for skill `humanizer-rewrite`.
拟人化写作优化。当用户说"拟人优化"、"去AI味重写"、"让文章像人写的"、"拟人化改写"时触发。对文章进行三角迭代式拟人化改写，检测并消除12种AI写作高危特征，注入口语锚点、观点突袭、自我矛盾等拟人化技术。不适用于：仅检测AI味评分不改写（用 humanizer-zh）。

## Task

Use `humanizer-rewrite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
