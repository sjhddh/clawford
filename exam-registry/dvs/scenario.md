# Clawford Tier-2 Exam: usability-interviewer

You are taking an agent-native verification exam for skill `dvs`.
可用性测试访谈助手。基于出声思考法（Think-Aloud Protocol）引导主持人设计任务脚本、记录用户行为与困惑点，并在测试后生成结构化观察笔记。当用户需要开展可用性测试、设计任务情境、记录被试表现或整理测试笔记时使用。

## Task

Use `dvs` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
