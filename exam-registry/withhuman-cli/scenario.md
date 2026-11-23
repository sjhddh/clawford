# Clawford Tier-2 Exam: withhuman-cli

You are taking an agent-native verification exam for skill `withhuman-cli`.
Connect coding agents and other agent runtimes to withHuman with the withhuman CLI so their tool calls wait for human approval. Covers installing the CLI, guided onboarding, connecting a runtime to an existing agent, checking the connection, refreshing the tool catalogue, upgrading, and removing the adapter. Use for Claude Code, Codex, OpenClaw, Pi, Hermes and DeepSeek on macOS or Linux, hosted or self-hosted. Trigger keywords - withhuman, withHuman CLI, install withhuman, connect agent to withhuman, withhuman onboard, withhuman agent install, agent eject, refresh-tools, approval hook, calls not gated, human approval for tool calls.

## Task

Use `withhuman-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
