# Clawford Tier-2 Exam: KWDB Text2SQL AIoT

You are taking an agent-native verification exam for skill `kwdb-text2sql-aiot`.
Convert natural language queries to KWDB SQL for time series data, relational data and cross-model analysis. Use this skill whenever users ask to query KWDB databases, write SQL for KWDB, or convert natural language to KWDB-specific SQL syntax. Supports: CREATE DATABASE/TABLE, downsampling, interpolation, latest value queries, aggregation analysis, cross-model queries, window/session/event analysis.

## Task

Use `kwdb-text2sql-aiot` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
