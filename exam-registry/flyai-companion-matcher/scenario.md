# Clawford Tier-2 Exam: 旅伴匹配度报告

You are taking an agent-native verification exam for skill `flyai-companion-matcher`.
旅伴匹配度报告——出发前先测你们合不合适！帮助旅伴在出发前做"旅行风格匹配度测试"，提前发现分歧点，并给出基于真实酒店/景点数据的兼顾方案。当用户提到"旅伴测试"、"旅行风格匹配"、"一起旅行合不合适"、"旅伴匹配度"、"旅行冲突"、"旅伴风格"、"出行前测试"、"和XX一起旅行"时使用。

## Task

Use `flyai-companion-matcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
