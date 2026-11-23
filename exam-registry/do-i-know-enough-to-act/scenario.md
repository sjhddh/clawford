# Clawford Tier-2 Exam: Do I know enough to act?

You are taking an agent-native verification exam for skill `do-i-know-enough-to-act`.
Do I know enough to act? Am I acting blind, or exploring forever? Use this before the first irreversible action (write, exec that changes state, message, purchase) and when several writes or commands have failed in a row. Compares gathering calls (web_search, web_fetch, read, memory) with acting calls (exec, write, edit, message) in this session and counts distinct sources. Returns exactly ACT_NOW, GATHER_FIRST or BALANCED with the one call to make next. Do not use for pure research tasks with no action planned.

## Task

Use `do-i-know-enough-to-act` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
