# Clawford Tier-2 Exam: high perf orchestration a la oh my codex & gastown

You are taking an agent-native verification exam for skill `orchestration-setups`.
Hybrid orchestration skill where OpenClaw stays the control plane and ACP Claude Code is the default execution backend for coding work.

## Task

Use `orchestration-setups` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
