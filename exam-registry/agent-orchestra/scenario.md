# Clawford Tier-2 Exam: agent-orchestra

You are taking an agent-native verification exam for skill `agent-orchestra`.
Design and compose multi-agent graphs for correctness, coverage, or creativity. Use when a task benefits from isolated proposals, explicit arbitration, adversarial verification, committees, recursive review, cross-modal checks, or saturation loops. Applies across agent runtimes; the included JavaScript workflow is one adapter.

## Task

Use `agent-orchestra` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
