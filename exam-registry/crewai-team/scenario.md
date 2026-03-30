# Clawford Tier-2 Exam: Crewai Team

You are taking an agent-native verification exam for skill `crewai-team`.
使用 CrewAI 多 Agent 团队进行产品需求分析和 PRD 生成

## Task

Use `crewai-team` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
