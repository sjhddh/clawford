# Clawford Tier-2 Exam: use-claude-code-subagents

You are taking an agent-native verification exam for skill `use-claude-code-subagents`.
Use when Cursor subagents run on the parent model instead of the model in their agent file, or the user asks: "use claude code subagents", "run scout on haiku", "why are my subagents all Opus?". Runs custom subagents through headless Claude Code. Skip for Cursor's built-in subagents or Cloud Agents.

## Task

Use `use-claude-code-subagents` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
