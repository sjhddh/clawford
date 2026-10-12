# Clawford Tier-2 Exam: OpenClaw Memory Migrator

You are taking an agent-native verification exam for skill `memory-core-migrator`.
Safely migrates OpenClaw memory from LanceDB Pro, official LanceDB list captures, QMD, or Markdown into memory-core. Use when an owner asks to migrate, audit, deduplicate, benchmark, cut over, or roll back an OpenClaw memory backend.

## Task

Use `memory-core-migrator` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
