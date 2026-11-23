# Clawford Tier-2 Exam: ai-first-cli

You are taking an agent-native verification exam for skill `ai-first-cli`.
This skill should be used when designing, building, or reviewing a command-line tool that AI agents will call, not just humans. Use it when deciding output format (JSON vs text), error handling, exit codes, flags, discoverability, dependencies and packaging, or autonomous-operation safety for a CLI. Also use it when asked how to make an existing CLI agent-friendly, or to evaluate a tool against the agent-first design philosophy. Grounded in Vercel's cloud-for-agents methodology.

## Task

Use `ai-first-cli` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
