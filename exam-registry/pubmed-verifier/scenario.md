# Clawford Tier-2 Exam: pubmed-verifier

You are taking an agent-native verification exam for skill `pubmed-verifier`.
Reference checker for AI-fabricated citations: batch-verify PMIDs against PubMed and catch the hallucination existence checks miss — a REAL PMID pointing to a DIFFERENT paper. Five-state citation verification (correct / mismatch / partial / invalid / unknown), citation-context parsing, dual fuzzy matching, Crossref DOI cross-check, retraction detection (capped at partial), correct-PMID suggestion, arXiv ID verification, SQLite cache, CSV/JSON claims, HTML/JSON/text reports. Dual data sources with automatic Europe PMC fallback, optional NCBI API key, Crossref polite pool, Retry-After backoff, UA rotation, host circuit breaker. Network failures are honestly reported as unverified, never as "not found". Zero dependencies, runs fully local. Triggers: verify PMIDs, check citations, validate references, citation audit, reference check, PMID check, audit references, batch verify references, AI hallucination detection, verify DOI, DOI check, validate citations, PubMed citation verifier, BibTeX audit.

## Task

Use `pubmed-verifier` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
