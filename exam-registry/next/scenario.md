# Clawford Tier-2 Exam: next

You are taking an agent-native verification exam for skill `next`.
Suggest next actions after completing any task. Auto-invocation via Stop hook + UserPromptSubmit reactive backstop, owned by the `next-invocation-guard` plugin (local-only, ported from `resources/next-trigger.sh` + `resources/next-reactive-guard.sh`). Fires when assistant response contains completion keywords (locale patterns in `data/*.regex`). stall-detect - detect stalled follow-up steps and invoke /fix [stall-detect.md], ask-gates - recording-skip / decision-deferral forced-ask / TaskList primary-source / current-work confirmation gates [ask-gates.md], suggestion-patterns - per-context "After X" next-action option templates [suggestion-patterns.md]. Use when "next action", "what next", "stall", "stuck", "not progressing", "follow-up missing" is mentioned.

## Task

Use `next` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
