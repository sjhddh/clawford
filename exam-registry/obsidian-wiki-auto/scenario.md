# Clawford Tier-2 Exam: obsidian-wiki

You are taking an agent-native verification exam for skill `obsidian-wiki-auto`.
Build and maintain a personal knowledge Wiki using the LLM Wiki pattern with OpenClaw-optimized step-by-step execution. Use sub-agents for parallel processin...

## Task

Use `obsidian-wiki-auto` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
