# Clawford Tier-2 Exam: stitch-to-code-workflow

You are taking an agent-native verification exam for skill `stitch-to-code-workflow`.
Turn a Google Stitch design into working code, in plain words, with any AI agent. Your AI agent drafts the instructions for each step, you copy the HTML with View Code, paste it into VS Code, and run Claude Code, then the agent checks the code you paste back, screen by screen, and gives a fix draft.

## Task

Use `stitch-to-code-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
