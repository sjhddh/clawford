# Clawford Tier-2 Exam: 教育征文写作助手

You are taking an agent-native verification exam for skill `education-essay-writer`.
金牛区教育学会"人工智能+教育"主题征文写作专用助手。 参考 awesome-ai-research-writing 的双重角色 Prompt 框架（生成者+审核者）， 专为教育实践类征文设计，支持初稿生成、质量评审、迭代改进。 触发词：写征文、起草征文、帮我写作文、教育征文、征文评审、润色征文。 适用：成都市金...

## Task

Use `education-essay-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
