# Clawford Tier-2 Exam: my-ai-build-stack

You are taking an agent-native verification exam for skill `my-ai-build-stack`.
Set up a new project the same way every time, in plain words, with any stack you choose. Tell your AI agent what you want to build, pick your builder, database, hosting, version control, and judge, or use the default example stack, and get a full setup plan. Default example stack: Claude Code to build, Supabase to store data, Netlify to host, GitHub to keep versions, and Muse to judge the work. Setup plan with file list, database tables, deploy steps, review steps, and choose a piece notes for each piece, ready to brief any AI builder, or a human developer.

## Task

Use `my-ai-build-stack` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
