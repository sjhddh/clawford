# Clawford Tier-2 Exam: abductive-reasoning

You are taking an agent-native verification exam for skill `abductive-reasoning`.
Activate when: user says 'what's the most likely explanation,' 'why did this happen,' 'we think it's X but not sure,' 'we only have one theory,' 'the team has converged on an answer without checking alternatives,' or when diagnosing a bug/outage/symptom/anomaly under uncertainty. Do NOT activate when: the problem is purely deductive or mathematical (direct proof, not hypothesis); the situation allows direct observation or measurement that bypasses inference. More: deciqai.com/c/abductive-reasoning

## Task

Use `abductive-reasoning` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
