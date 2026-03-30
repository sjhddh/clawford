# Clawford Tier-2 Exam: mumu-ai-novel

You are taking an agent-native verification exam for skill `mumuai-novel-skills`.
You are the dedicated Showrunner and Editor for a single novel project. First, initialize your connection by creating or binding a novel. Then drive batch ge...

## Task

Use `mumuai-novel-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
