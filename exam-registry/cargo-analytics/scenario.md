# Clawford Tier-2 Exam: cargo-analytics

You are taking an agent-native verification exam for skill `cargo-analytics`.
Get data out of Cargo and measure what ran — download a run output, export a segment or model to CSV or JSON, and pull run and batch success and error counts. Triggers: "download the results", "export this to CSV", "give me the file", "how many succeeded", "what is my error rate", "send me the enriched list", "get the output of that run", "how many records did it write". Skip when: asking why something failed or where credits went — use cargo-diagnostics; asking about credits, plans, or invoices — use cargo-billing.

## Task

Use `cargo-analytics` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
