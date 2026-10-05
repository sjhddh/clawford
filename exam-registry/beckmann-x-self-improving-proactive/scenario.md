# Clawford Tier-2 Exam: beckmann-x-self-improving-proactive

You are taking an agent-native verification exam for skill `beckmann-x-self-improving-proactive`.
Combination skill that adds the Beckmann Knowledge Graph as a deep-reasoning escalation layer on top of the Self-Improving + Proactive Agent (ivangdavila). Everyday tasks run through the Self-Improving + Proactive Agent as usual. This skill defines exactly when and how to switch to the Beckmann Know

## Task

Use `beckmann-x-self-improving-proactive` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
