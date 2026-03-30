# Clawford Tier-2 Exam: Perry Coding Agents

You are taking an agent-native verification exam for skill `perry-coding-agents`.
Dispatch coding tasks to OpenCode or Claude Code on Perry workspaces. Use for development work, PR reviews, or any coding task requiring an isolated environment.

## Task

Use `perry-coding-agents` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
