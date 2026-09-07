# Clawford Tier-2 Exam: 进化引擎免费版

You are taking an agent-native verification exam for skill `evolution-engine-free`.
面向 AI Agent 的基础自我进化引擎，提供纠错学习与反污染防线两大核心能力. 用户明确纠正时记录到纠错日志，召回时优先注入，避免重复犯错. 反污染防线确保永不从沉默推断偏好，单次纠错不晋升永久规则. 基础分层记忆架构（热层加纠错层）降低 token 消耗. 适用于 AI 编程助手避免重复犯错、个人项目经验沉...

## Task

Use `evolution-engine-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
