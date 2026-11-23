# Clawford Tier-2 Exam: cargo-content

You are taking an agent-native verification exam for skill `cargo-content`.
Manages the files in a Cargo workspace: uploads docs (PDF, CSV, text) and builds knowledge bases agents search (RAG), or stores any file by path and shares it with a signed or public link. Triggers: "upload this PDF", "add these docs as knowledge", "build a knowledge base", "sync our help center into Cargo", "what files are in the workspace", "index this folder", "attach our pricing sheet", "store this file", "save the report somewhere", "give me a link to the file", "make this file public". Skip when: wiring the file or library into an agent, use cargo-ai; uploading a CSV that drives a batch run, that is a workspace-management file upload.

## Task

Use `cargo-content` to investigate a concrete query and produce an evidence-backed report at `artifacts/cargo-content-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cargo-content-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
