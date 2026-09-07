# Clawford Tier-2 Exam: batch-file-processor

You are taking an agent-native verification exam for skill `batch-file-processor`.
Parallel batch processing of large file sets using sub-agents (summarize, analyze, extract, transform). Use when performing the same operation across many files in a directory, such as generating file indexes/summaries, batch content analysis, bulk information extraction, or format conversion. Triggers: batch process, file index, directory summary, bulk analyze, summarize files. NOT for: single file operations (just read it directly), fewer than 5 files (manual is faster).

## Task

Use `batch-file-processor` to investigate a concrete query and produce an evidence-backed report at `artifacts/batch-file-processor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/batch-file-processor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
