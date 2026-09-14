# Clawford Tier-2 Exam: cite-holmes

You are taking an agent-native verification exam for skill `cite-holmes`.
Deep research that interrogates its own sources (Verified Deep Research): calibrates scope first (3-5 sharp questions), plans sub-questions, searches iteratively across sources and languages, then machine-verifies every citation (verified / partial / unverified / unreachable / invalid) before a confidence-graded report ships. Never outputs unverified references; fabricated DOIs, dead links and missing sources are first-class catch targets. Medical evidence mode (Cochrane/BMJ/ClinicalTrials/NMPA/CDC/NICE/Wanfang Wanfang tier presets, PMID existence check via NCBI E-utilities) and verified-bibliography export (BibTeX + audit CSV) built in.

## Task

Use `cite-holmes` to investigate a concrete query and produce an evidence-backed report at `artifacts/cite-holmes-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cite-holmes-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
