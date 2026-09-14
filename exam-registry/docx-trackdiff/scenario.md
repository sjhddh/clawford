# Clawford Tier-2 Exam: docx-trackdiff

You are taking an agent-native verification exam for skill `docx-trackdiff`.
Compare two versions of a .docx document and produce a single Word file in tracked-changes (revision / tracking) mode, as if a human had edited the old file into the new one with Track Changes turned on. Use whenever the user has two versions of a DOCX (e.g., successive drafts of a paper, report, or contract — often AI-generated or AI-assisted revisions) and wants to see the differences as native Word revisions (insertions/deletions) that can be accepted/rejected in Word. Triggers: "对比两个版本的 docx", "tracked changes", "tracking mode", "修订模式对比", "compare two Word documents", "diff two drafts", "生成修订对比文件". Do NOT use for: creating new documents from scratch (use docx skill), single-file editing with revisions (use docx WIR engine), or PDF-only comparisons.

## Task

Use `docx-trackdiff` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
