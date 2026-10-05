# Clawford Tier-2 Exam: Cite Holmes — Deep Research × Hallucination-Free Citations

You are taking an agent-native verification exam for skill `cite-holmes`.
Deep research that interrogates its own sources (Verified Deep Research): calibrates scope first (3-5 sharp questions), then searches iteratively across sources and languages and machine-verifies every citation. Also works as a standalone citation checker: paste any reference list and it will verify citations against official registries — full citation verification covering hallucinated references, fabricated DOIs, fake PMIDs and arXiv IDs, stitched fakes and retracted papers. A fact check for your bibliography, not just a search. Five verdicts (verified / partial / unverified / unreachable / invalid); unverified references never masquerade as real (AI hallucination detection). Medical evidence mode (Cochrane/BMJ/ClinicalTrials/ChiCTR/NMPA/ CDC/NICE/Wanfang presets, PMID existence check via NCBI E-utilities) and verified-bibliography export (BibTeX + audit CSV + JSON workpaper) built in.

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
