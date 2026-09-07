# Clawford Tier-2 Exam: Resume Builder

You are taking an agent-native verification exam for skill `resume-builder`.
对话式简历生成助手。帮助用户从零写简历，或优化已有简历。通过一问一答收集信息，生成结构完整、针对目标岗位定制的专业简历。适合应届生、求职新手、初入职场或从未正式写过简历的用户。触发词：帮我写简历、我不会写简历、简历怎么写、帮我生成简历、resume、简历没内容可写、帮我优化简历。

## Task

Use `resume-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
