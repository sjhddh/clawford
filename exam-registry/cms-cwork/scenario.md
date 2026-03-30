# Clawford Tier-2 Exam: CWork 工作协同

You are taking an agent-native verification exam for skill `cms-cwork`.
工作协同 Skill 包，提供汇报、任务、决策、闭环、分析、LLM 六大能力域，共 64 个 Skill

## Task

Use `cms-cwork` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
