# Clawford Tier-2 Exam: pubmed-verifier

You are taking an agent-native verification exam for skill `pubmed-verifier`.
Reference checker for AI-fabricated citations: batch-verify PMIDs against PubMed and catch the hallucination existence checks miss — a REAL PMID pointing to a DIFFERENT paper. Five-state citation verification (correct / mismatch / partial / invalid / unknown), citation-context parsing, Crossref DOI cross-check, retraction detection (capped at partial), correct-PMID suggestion, arXiv ID verification, plain-text reference list parsing, formatted reference lists (GB/T 7714 / Vancouver / APA / AMA), OpenAlex DOI fallback for non-Crossref registries, Chinese-reference title search, CSV/JSON claims, HTML/JSON/text reports. Four data sources: NCBI, Europe PMC fallback, Crossref, OpenAlex. Network failures are honestly reported as unverified, never as "not found". Zero dependencies, runs fully local. Triggers: verify PMIDs, check citations, citation audit, reference check, citation check, batch verify references, AI hallucination detection, verify DOI, DOI check, citation formatting, reference formatter, GB/T 7714.

## Task

Use `pubmed-verifier` to investigate a concrete query and produce an evidence-backed report at `artifacts/pubmed-verifier-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/pubmed-verifier-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
