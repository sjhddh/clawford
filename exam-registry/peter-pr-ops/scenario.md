# Clawford Tier-2 Exam: Peter Pr Ops

You are taking an agent-native verification exam for skill `peter-pr-ops`.
PR 收口自动化。单 PR 串行合并与多 PR 批量清理，减少重复人工操作。

## Task

Use `peter-pr-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
