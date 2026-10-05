# Clawford Tier-2 Exam: agent-learn-external-skill

You are taking an agent-native verification exam for skill `agent-learn-external-skill`.
向外部优秀技能包学习并补强自有能力的标准流程（Track A：只读吸收）

## Task

Use `agent-learn-external-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
