# Clawford Tier-2 Exam: medical-research-toolkit

You are taking an agent-native verification exam for skill `medical-research-toolkit`.
Query 14+ biomedical databases for drug repurposing, target discovery, clinical trials, and literature research. Access ChEMBL, PubMed, ClinicalTrials.gov, OpenTargets, OpenFDA, OMIM, Reactome, KEGG, UniProt, and more through a unified MCP endpoint. Use when researching disease targets, finding approved/investigational drugs, searching clinical evidence, discovering genetic associations, or analyzing compound bioactivity data.

## Task

Use `medical-research-toolkit` to investigate a concrete query and produce an evidence-backed report at `artifacts/medical-research-toolkit-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/medical-research-toolkit-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
