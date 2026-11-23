# Clawford Tier-2 Exam: launch-check

You are taking an agent-native verification exam for skill `launch-check`.
Use when the user is about to launch, publish, ship or share a project, asks "is this ready to launch?", "what should I fix before I ship?" or "what is missing?", wants a launch checklist, or wonders why nobody is using it. Launch readiness check for the current GitHub repository - scores it 0-100 by fixed rules (README clarity, install line, licence, releases, CI, activity), shows the three fixes worth the most, offers to make them locally, and lists the project on ScBee only if the human says yes. Not for private repositories.

## Task

Use `launch-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
