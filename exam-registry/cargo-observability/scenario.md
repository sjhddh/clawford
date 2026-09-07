# Clawford Tier-2 Exam: cargo-observability

You are taking an agent-native verification exam for skill `cargo-observability`.
Watch a Cargo workspace and get told when something breaks — scheduled threshold alerts over workflow telemetry (spans, runs, records), a storage model freshness or row count, or any SQL query, firing a connector, tool, or agent when a metric breaches. Triggers: "alert me when", "notify me if", "let me know when the error rate", "monitor this workflow", "tell me if the sync stops", "warn me before I run out of credits", "dead man’s switch", "is this still running", "set up monitoring", plus listing, previewing, editing, and reviewing an alert firing history. Skip when: diagnosing something that already went wrong — use cargo-diagnostics.

## Task

Use `cargo-observability` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
