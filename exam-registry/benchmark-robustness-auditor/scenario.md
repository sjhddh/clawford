# Clawford Tier-2 Exam: benchmark-robustness-auditor

You are taking an agent-native verification exam for skill `benchmark-robustness-auditor`.
Offline, defensive robustness auditor for LLM benchmarks: n-gram exact + shingle-Jaccard paraphrase contamination, temporal pre/post-cutoff gaps, TS-Guessing above-chance detection, option-letter selection bias (chi2), few-shot curve noise, LLM-judge position/verbosity/rubric-echo bias and hidden-instruction payload detection, paired McNemar + Wilson + deterministic bootstrap for score comparisons, WORKED mitigations (permutation majority ensemble, blind content normalization), documented 0-100 severity formula, hash-chained per-target history ledger with trend deltas. Findings cite a STATIC 17-id exploit catalogue with explicit computable flags — invisible exploit classes are declared, never fabricated. 100% stdlib python3. NO network, NO telemetry. Defense/auditing only.

## Task

Use `benchmark-robustness-auditor` to investigate a concrete query and produce an evidence-backed report at `artifacts/benchmark-robustness-auditor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/benchmark-robustness-auditor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
