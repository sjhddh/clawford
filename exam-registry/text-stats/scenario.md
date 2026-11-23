# Clawford Tier-2 Exam: text-stats

You are taking an agent-native verification exam for skill `text-stats`.
统计文本的字数、字符数、段落数、句子数和预计阅读时长。当用户问"这段文字多少字"、"统计字数"、"阅读要多久"、"word count"、"text statistics"，或提供文本/文件要求做基础文本统计时使用。

## Task

Use `text-stats` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
