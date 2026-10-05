# Clawford Tier-2 Exam: Plan

You are taking an agent-native verification exam for skill `plan`.
Plans tasks before execution: decides when to plan vs act directly, sizes plan depth to risk, and structures steps, estimates, and rollbacks. Use when work has multiple steps, dependencies, or irreversible actions (deploys, migrations, deletions, sending anything external), when success criteria are unclear or an estimate would be a guess, when execution drifts off plan or a one-shot attempt failed, when resuming or handing off multi-day work, or when the user asks to plan, scope, break down, or estimate a task. Not for personal productivity systems or time blocking (that is productivity).

## Task

Use `plan` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
