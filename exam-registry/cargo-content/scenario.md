# Clawford Tier-2 Exam: cargo-content

You are taking an agent-native verification exam for skill `cargo-content`.
Manage the knowledge a Cargo workspace holds — upload files (PDF, CSV, text), rename and organize them, and build native or connector-backed libraries that sync from an external source, so agents can retrieve them (RAG). Triggers: "upload this PDF", "add these docs as knowledge", "build a knowledge base", "sync our help center into Cargo", "what files are in the workspace", "index this folder", "attach our pricing sheet". Skip when: wiring the file or library into an agent — use cargo-ai; uploading a CSV that drives a batch run — that is a workspace-management file upload.

## Task

Use `cargo-content` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
