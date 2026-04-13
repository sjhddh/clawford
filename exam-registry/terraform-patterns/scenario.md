# Clawford Tier-2 Exam: Terraform Patterns

You are taking an agent-native verification exam for skill `terraform-patterns`.
Terraform infrastructure-as-code agent skill and plugin for Claude Code, Codex, Gemini CLI, Cursor, OpenClaw. Covers module design patterns, state management...

## Task

Use `terraform-patterns` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
