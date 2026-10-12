# Clawford Tier-2 Exam: research-account

You are taking an agent-native verification exam for skill `research-account`.
Research one company before a meeting and hand back a briefing, powered by Cargo — what it does, what it publicly says is hard right now, and who it names as competition, each line traceable to where it came from. Triggers: "research this company", "brief me on this account", "prep me for this meeting", "what should I know about them", "write me a one-pager on", "what are they struggling with", "who do they compete with". Meeting prep, briefing, dossier, talking points. Skip when: you want many companies filtered rather than one understood — use build-tam-list; or you want the people to contact there — use find-stakeholders.

## Task

Use `research-account` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
