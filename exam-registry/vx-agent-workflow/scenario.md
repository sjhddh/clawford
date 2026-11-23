# Clawford Tier-2 Exam: vx-agent-workflow

You are taking an agent-native verification exam for skill `vx-agent-workflow`.
Token-efficient command execution patterns for AI agents using vx. Use when running builds, tests, linting, GitHub operations, or any command that produces verbose output. Teaches agents to filter output cross-platform using vx-managed tools (vx rg, vx jq) instead of platform-specific syntax (Select-String, grep, findstr). Includes token measurement, savings tracking, and deep recipes for cargo, gh, pytest, and more.

## Task

Use `vx-agent-workflow` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
