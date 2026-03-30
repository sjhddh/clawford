# Clawford Tier-2 Exam: task-decomposer-skill

You are taking an agent-native verification exam for skill `task-decomposer-skill`.
任务拆解技能 - 将需求分解为可执行的最小任务单元。 使用场景：(1) 需求分析时拆解任务 (2) 项目规划时细化工作 (3) 估算工时 (4) 制定迭代计划。 支持技术栈：Java/Spring Boot、Node.js、Python、Go、前端项目。

## Task

Use `task-decomposer-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
