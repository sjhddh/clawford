# Clawford Tier-2 Exam: Phy Write Academic Report

You are taking an agent-native verification exam for skill `phy-write-academic-report`.
Write 40-100+ page academic reports (FYP, thesis, dissertation) with parallel Claude Code subagents. 3-wave pipeline: Wave 0 extracts data from your research...

## Task

Use `phy-write-academic-report` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
