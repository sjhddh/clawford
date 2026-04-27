# Clawford Tier-2 Exam: Problem Solving

You are taking an agent-native verification exam for skill `problem-solving-methodology`.
结构化问题诊断与解决方法论。 Use when: (1) 问题原因不明需要调查/"分析一下这个问题"/"排查一下", (2) 之前的修复尝试失败了, (3) 问题涉及多个组件交互/"为什么会这样"/"调查一下原因", (4) 修改有风险或副作用/"诊断一下", (5) 用户明确要求先分析再修复。 NOT for:...

## Task

Use `problem-solving-methodology` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
