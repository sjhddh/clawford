# Clawford Tier-2 Exam: markji-card-syntax

You are taking an agent-native verification exam for skill `markji-card-syntax`.
使用中文生成、改写、检查和修正面向普通用户的 Markji 卡片语法（亦称“墨墨记忆卡”语法）内容。适用于用户要求制作可直接粘贴的 Markji 卡片或墨墨记忆卡内容、把笔记转换成卡片、添加挖空/选择题/文字样式/公式/媒体或卡片关联，以及排查卡片语法未生效、括号转义或嵌套错误的场景。

## Task

Use `markji-card-syntax` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
