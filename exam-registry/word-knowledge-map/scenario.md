# Clawford Tier-2 Exam: word-knowledge-map

You are taking an agent-native verification exam for skill `word-knowledge-map`.
输入英文单词时使用：经 Knowledge IR 生成手绘涂鸦教学海报风格单词知识地图（卡通小人+粗弯箭头；禁止 Soft UI/扁平 App 风）。适用于看一眼就会的单词、单词知识地图等场景；含弱词族兜底版式。

## Task

Use `word-knowledge-map` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
