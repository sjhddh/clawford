# Clawford Tier-2 Exam: 元习 yotta-learn

You are taking an agent-native verification exam for skill `yotta-learn`.
元习 —— 跨智能体的学习闭环技能：把错误、纠正与洞见沉淀为 .learnings/ 条目，供后续会话与技能改进复用。触发：命令失败、用户纠正、发现更好的做法、请求缺失能力、外部接口故障、知识过时、需要沉淀经验时；或用户说 记一笔/学习/沉淀/self-improvement/learnings 等。边界：不写入私密/敏感信息（除非用户明确要求）；不自动改动系统文件。

## Task

Use `yotta-learn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
