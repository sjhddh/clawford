# Clawford Tier-2 Exam: orchestrator

You are taking an agent-native verification exam for skill `orchestrator`.
Central entry point of the afonsoft agent harness. Use when starting a new project, resuming an existing one, planning features/Epics/releases, or running any multi-step agent-driven work. Validates and reconciles SPECs (SDD), audits the codebase and harness for gaps (security, architecture, performance, hygiene), proposes improvements, fragments work into GitHub Issues, delegates implementation/QA/review to specialized skills, and re-validates everything until delivery. Also use to review unapproved SPECs, reconcile open GitHub Issues with code, or run a final gap check before closing a release.

## Task

Use `orchestrator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
