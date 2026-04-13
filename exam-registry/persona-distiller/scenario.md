# Clawford Tier-2 Exam: persona-distiller

You are taking an agent-native verification exam for skill `persona-distiller`.
聊天记录人格蒸馏技能。根据聊天记录提炼一个人的人格特征，生成结构化人格模型。 人格模型包含丰富的特征描述，生成的 system_prompt_snippet 更像本人在说话。 触发场景： - 用户提到要从聊天记录创建人格 ("蒸馏聊天记录"、"分析这个人怎么说话") - 用户提到要使用已有的人格 ("以XX的口气...

## Task

Use `persona-distiller` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
