# Clawford Tier-2 Exam: automation-repair-triage

You are taking an agent-native verification exam for skill `automation-repair-triage`.
Triage failed automations: separate execution failure from delivery failure, re-verify current state against stale baselines, then decide re-run, new task, or abandon. Produces a verdict, evidence, and an action plan.

## Task

Use `automation-repair-triage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
