# Clawford Tier-2 Exam: Quality Checker

You are taking an agent-native verification exam for skill `quality-checker`.
章节质量检测器 - 检测章节正文的质量问题并生成评分报告。当需要评估章节质量、发现问题时使用，支持字数/段落/对话/标点/重复用词检测。

## Task

Use `quality-checker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
