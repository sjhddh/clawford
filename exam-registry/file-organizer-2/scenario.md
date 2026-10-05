# Clawford Tier-2 Exam: File Organizer

You are taking an agent-native verification exam for skill `file-organizer-2`.
Intelligently organize files and folders — analyze structure, find duplicates, suggest layouts, and clean up — with strict safety guardrails. Use when the user asks to organize/downloads, find duplicates, clean up files, sort photos by date, triage a folder, 整理文件, 查找重复文件, 清理文件, 文件分类, 桌面整理. Cross-platform (Windows/macOS/Linux), read-only first, trash (never permanent delete), backup before changes, small batches with confirmation.

## Task

Use `file-organizer-2` to investigate a concrete query and produce an evidence-backed report at `artifacts/file-organizer-2-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/file-organizer-2-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
