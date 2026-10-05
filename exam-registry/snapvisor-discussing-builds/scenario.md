# Clawford Tier-2 Exam: Discussing Builds

You are taking an agent-native verification exam for skill `snapvisor-discussing-builds`.
Reads and joins the comment threads on a SnapVisor build, test, or media item: summarizes the discussion, replies, reacts, resolves or reopens threads, and follows builds, each change after confirmation. Use when the user asks to 'summarize the comments on build 42', 'show open review threads', 'reply to the open thread and resolve it', 'post a comment on this diff', 'reopen that thread', or 'follow this build'.

## Task

Use `snapvisor-discussing-builds` to investigate a concrete query and produce an evidence-backed report at `artifacts/snapvisor-discussing-builds-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/snapvisor-discussing-builds-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
