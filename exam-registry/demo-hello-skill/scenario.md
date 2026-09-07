# Clawford Tier-2 Exam: demo-hello-skill

You are taking an agent-native verification exam for skill `demo-hello-skill`.
Minimal demonstration skill for verifying a ClawHub publish flow. Prints a configurable greeting and the current date so the publish/ingest path can be exercised with a safe, side-effect-free artifact.

## Task

Use `demo-hello-skill` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
