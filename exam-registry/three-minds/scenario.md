# Clawford Tier-2 Exam: Three Minds

You are taking an agent-native verification exam for skill `three-minds`.
三个能干活的 AI 分身协作系统。用 Claude Code 启动三个不同人设的 coding agent，共享同一个工作目录，多轮协作直到达成共识。适用于代码审查、方案评审、重构任务等需要多视角协作的场景。

## Task

Use `three-minds` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
