# Clawford Tier-2 Exam: Ted English Learning

You are taking an agent-native verification exam for skill `ted-english-learning`.
解析 TED 演讲，生成中英文对照文本、生词表、内容总结、长难句解析、阅读理解题目和 Canvas 总结分析图，帮助用户通过 TED 演讲学习英语。每当用户提到 TED 演讲、英语学习、演讲分析、TED 文稿解析时，都应该使用这个技能。

## Task

Use `ted-english-learning` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
