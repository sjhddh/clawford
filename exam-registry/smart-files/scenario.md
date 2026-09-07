# Clawford Tier-2 Exam: smart-files

You are taking an agent-native verification exam for skill `smart-files`.
Content-aware file management for workspace files: search (content snippets opt-in via --snippets), dedup, organize, rename, file metadata inspection, and continuous watch mode. Watch mode persists a journal (paths/hashes/sizes/ timestamps/change events) to memory/smart-files-journal.json and can monitor paths outside the workspace when --force is passed. All file mutations (organize/rename) require --force and are dry-run by default.

## Task

Use `smart-files` to investigate a concrete query and produce an evidence-backed report at `artifacts/smart-files-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/smart-files-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
