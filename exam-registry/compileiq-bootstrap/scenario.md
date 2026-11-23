# Clawford Tier-2 Exam: compileiq-bootstrap

You are taking an agent-native verification exam for skill `compileiq-bootstrap`.
Use when starting a fresh CompileIQ project, hitting a hang on the first evaluation, or before running any other compileiq-* skill. Verifies CUDA 13.3+, ptxas, GPU access, that `from compileiq.ciq import Search` and friends resolve, and that `PtxasSearchSpace().retrieve()` returns a real path. Documents the env vars that control timeouts, caching, and search-space mirroring. Triggers on "set up compileiq", "compileiq doesn't work", "first eval hangs", "where do search spaces come from", "air-gapped compileiq".

## Task

Use `compileiq-bootstrap` to investigate a concrete query and produce an evidence-backed report at `artifacts/compileiq-bootstrap-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/compileiq-bootstrap-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
