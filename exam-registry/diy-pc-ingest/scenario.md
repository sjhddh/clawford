# Clawford Tier-2 Exam: Diy Pc Ingest

You are taking an agent-native verification exam for skill `diy-pc-ingest`.
Ingest pasted PC parts purchase/config text (Discord message receipts, bullet lists) into Notion DIY_PC tables (PCConfig, ストレージ, エンクロージャー, PCInput). Use when...

## Task

Use `diy-pc-ingest` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
