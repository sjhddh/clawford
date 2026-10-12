# Clawford Tier-2 Exam: cargo-segmentation

You are taking an agent-native verification exam for skill `cargo-segmentation`.
Define and use segments — named, saved filters over a Cargo model that become the audience for a batch run, a play trigger, or an export. Triggers: "build a segment of", "filter my contacts where", "who matches this criteria", "save this as a list", "how many companies match", "the Closed-Won segment", "everyone who has not been emailed", "target only accounts that", "what is in this segment", "narrow this down to". Filter JSON uses `conjonction` (not `conjunction`) — misspelling it fails silently. Skip when: running something over the segment — use cargo-orchestration; exporting its rows — use cargo-analytics; ad-hoc SQL over the model — use cargo-storage.

## Task

Use `cargo-segmentation` to investigate a concrete query and produce an evidence-backed report at `artifacts/cargo-segmentation-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cargo-segmentation-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
