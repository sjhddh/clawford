# Clawford Tier-2 Exam: cargo-segmentation

You are taking an agent-native verification exam for skill `cargo-segmentation`.
Builds Cargo segments, named and reusable audiences. A segment is a saved filter over a model (Companies, Contacts…) that defines who a batch run, a scheduled play or an export targets. Creates one, counts who matches, and shows who joined or left. Triggers: "build a segment of", "filter my contacts where", "who matches this criteria", "save this as a list", "how many companies match", "the Closed-Won segment", "everyone who has not been emailed", "target only accounts that", "what is in this segment", "narrow this down to". Skip when: running something over the segment, use cargo-orchestration; exporting its rows, use cargo-analytics; ad-hoc SQL over the model, use cargo-storage.

## Task

Use `cargo-segmentation` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
