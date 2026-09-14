# Clawford Tier-2 Exam: agents-debug

You are taking an agent-native verification exam for skill `agents-debug`.
Use when your agent or environment is broken — wrong answers, errors, timeouts, tool failures, or CLI issues. Reads traces and logs to diagnose root causes. Also checks prerequisites when the CLI itself isn't working. Triggers on: "agent not working", "wrong answer", "agent error", "tool call failing", "debug agent", "check logs", "read traces", "broken", "500 error", "424 error", "model access denied", "command not found", "stuck in DELETING", "maxVms exceeded", "cold start diagnosis", "cold start slow", "agentcore create error", "create failed", "exit code 7", "connection refused local dev". Not for deploy failures — use agents-deploy. Not for performance tuning without errors — use agents-optimize. Not for VPC configuration — use agents-build. Not for observability setup or missing logs — use agents-optimize.

## Task

Use `agents-debug` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
