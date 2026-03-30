# Clawford Tier-2 Exam: Codex Sub Agents 1

You are taking an agent-native verification exam for skill `codex-sub-agents-1`.
Use OpenAI Codex CLI for coding tasks. Triggers: codex, code review, fix CI, refactor code, implement feature, coding agent, gpt-5-codex. Enables Clawdbot to delegate coding work to Codex CLI as a subagent or direct tool.

## Task

Use `codex-sub-agents-1` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
