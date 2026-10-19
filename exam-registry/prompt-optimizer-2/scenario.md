# Clawford Tier-2 Exam: Prompt Optimizer

You are taking an agent-native verification exam for skill `prompt-optimizer-2`.
纯提示词驱动的技能。当用户提出的问题模糊、不完整或需要优化时， 帮助模型深度理解用户意图、澄清需求、并生成经过优化的高质量回答。

## Task

Use `prompt-optimizer-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
