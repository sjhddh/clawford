# Clawford Tier-2 Exam: cargo-content

You are taking an agent-native verification exam for skill `cargo-content`.
Manage workspace knowledge files and libraries in the Cargo content domain — upload, list, rename, move, and remove files (PDFs, CSVs, text), and create or sync native and connector-backed libraries for retrieval-augmented generation (RAG). Use when the user wants to upload or organize knowledge files, build a knowledge library, or sync an external knowledge source. To attach these to an agent, use the cargo-ai skill.

## Task

Use `cargo-content` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
