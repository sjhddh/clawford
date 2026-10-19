# Clawford Tier-2 Exam: ceo-todo

You are taking an agent-native verification exam for skill `ceo-todo`.
Maintains one canonical markdown file as a CEO's single source of truth for everything they're on the hook for, and runs the Getting Things Done loop over it — capture, clarify, organize, reflect, engage. Turns pasted emails, meeting notes, and asks into clarified next-actions with an owner and a priority, tracks status with a fixed vocabulary ([OPEN]/[DONE]/[STALE]/[WAITING]), ages open items to [STALE] after 7 days, flags [WAITING] items past their reply-by date, archives done work without ever deleting it, and never auto-closes an item the CEO added by hand. Every mutating run is snapshot-backed and gated by a bundled deterministic validator so a commitment is never lost, corrupted, or silently changed. Use this skill whenever the user says "run my to-do", "update my todo doc", "what am I on the hook for", "GTD", "getting things done", "capture this", "triage my inbox into my todos", "weekly review", "single source of truth", "CEO to-do", "/ceo-todo", or points at a markdown to-do file and asks to keep it current. Based on the single-doc system Brian Halligan shared publicly. For the automated Gmail + Slack daily version, see the ceo-todo-daily agent.

## Task

Use `ceo-todo` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
