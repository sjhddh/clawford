# Clawford Tier-2 Exam: AgentGuard Burn

You are taking an agent-native verification exam for skill `agentguard-burn`.
Find out what used up a Claude Code or Codex usage limit. Runs `npx agentguard-burn why` on this machine's session transcripts, explains where the tokens went, relays the one "Next:" step it prints, and can install the free AgentGuard plugin that holds runaway sub-agent launches. Use when the user hit their Claude Code or Codex limit, asks where their tokens went, why a session cost so much or ran out so fast, or mentions runaway sub-agents.

## Task

Use `agentguard-burn` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
