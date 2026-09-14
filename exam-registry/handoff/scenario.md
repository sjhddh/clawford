# Clawford Tier-2 Exam: handoff

You are taking an agent-native verification exam for skill `handoff`.
Capture a session hand-off so work can resume cleanly in a new Claude session before context runs out. Writes a canonical dated Markdown file (objective, progress, decisions, files, open issues, and a ready-to-paste "Next Session Prompt") AND a lightweight project-memory pointer to it. Use this skill whenever the user says "/handoff", "hand off", "handoff", "save context", "preserve context", "running out of context", "wrap up for next session", "before we lose context", or otherwise asks to snapshot the current state for a fresh session — even if they don't say "skill".

## Task

Use `handoff` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
