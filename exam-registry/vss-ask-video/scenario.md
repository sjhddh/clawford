# Clawford Tier-2 Exam: vss-ask-video

You are taking an agent-native verification exam for skill `vss-ask-video`.
Use this skill when answering a question about previously analyzed or freshly scoped VSS video, or when reading a stored VSS memory job or record by id, or whenever a question should be answered by running the `vss memory introspect` command. Route through hot context, agent Markdown notes, `vss memory get` or `vss memory query`, `vss memory introspect`, or an exact-window `vss vlm run`. Not for video retrieval or metadata-answerable questions.

## Task

Use `vss-ask-video` to investigate a concrete query and produce an evidence-backed report at `artifacts/vss-ask-video-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vss-ask-video-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
