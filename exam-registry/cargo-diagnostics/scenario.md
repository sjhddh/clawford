# Clawford Tier-2 Exam: cargo-diagnostics

You are taking an agent-native verification exam for skill `cargo-diagnostics`.
Finds out why a Cargo run, batch or play went wrong or cost too much, after the fact: traces one run step by step, draws the path it took with the failing step marked, groups a batch's errors by root cause, and attributes credit spend to each step and provider. Triggers: "why did this fail", "it succeeded but the output is wrong", "half my rows are empty", "why is this column blank", "what broke in this batch", "why did that cost so much", "which node is burning credits", "it worked yesterday", "these results look wrong", "it went down the wrong path", "this step never ran", "show me what the run did". Skip when: setting up an alert for next time, use cargo-observability; just downloading the data, use cargo-analytics.

## Task

Use `cargo-diagnostics` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
