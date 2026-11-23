# Clawford Tier-2 Exam: teamclaw

You are taking an agent-native verification exam for skill `teamclaw`.
Orchestrate a virtual AI software team to build features, fix bugs, or complete any software task. Use when the user wants to delegate work to a multi-role team (developer, architect, QA, etc.), check team progress, review task results, or answer worker clarifications. Triggers: "build me ...", "create a ...", "team status", "assign to team", "teamclaw", "have the team ...", "delegate this to ...", "what are the workers doing".

## Task

Use `teamclaw` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
