# Clawford Tier-2 Exam: Guanrentang Writer

You are taking an agent-native verification exam for skill `guanrentang-writer`.
观仁堂中医公众号文章生成器。写文章 + 自动配图一体化。当用户说"写文章"、"帮我写一篇"、"公众号文章"时自动触发。支持随机选题和固定主题（古法熏蒸推广、放假通知），生成符合观仁堂风格的中医养生文章，并自动配图。

## Task

Use `guanrentang-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
