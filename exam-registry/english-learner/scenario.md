# Clawford Tier-2 Exam: 英语学习助手

You are taking an agent-native verification exam for skill `english-learner`.
专为英语学习者设计的综合技能，支持词汇记忆、语法学习、听说读写训练、翻译助手、错题管理和学习进度追踪。当用户提到英语学习、背单词、学英语、练习口语、翻译、英语语法、英语阅读等话题时使用此技能。

## Task

Use `english-learner` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
