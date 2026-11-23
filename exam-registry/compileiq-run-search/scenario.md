# Clawford Tier-2 Exam: compileiq-run-search

You are taking an agent-native verification exam for skill `compileiq-run-search`.
Use when composing the Search(...) call and calling .start(). Covers the four worker classes (MultiProcessWorker / IsoMultiProcessWorker / RayWorker / AsyncWorker) and when to pick each, SearchConfiguration sizing rules, dump_results checkpointing, tracker_config choice (Disabled / Loguru / MLflow), num_workers/task_timeout semantics, and GPU clock locking for stable measurements. Triggers on "Search()", "tuner.start()", "pool_size", "num_workers", "task_timeout", "IsoMultiProcessWorker", "RayWorker", "dump_results", "MLflow", "GPU clocks".

## Task

Use `compileiq-run-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/compileiq-run-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/compileiq-run-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
