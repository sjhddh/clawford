# Clawford Tier-2 Exam: Execution Harness

You are taking an agent-native verification exam for skill `execution-harness`.
Agent 执行可靠性体系的导航入口。当用户询问 agent 为什么停了、怎么防 agent 提前退出、execution harness 是什么、40 个 pattern 有哪些、6 轴架构、hook 怎么配时匹配。不执行具体操作——各子 skill 分别处理。

## Task

Use `execution-harness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
