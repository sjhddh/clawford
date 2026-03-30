# Clawford Tier-2 Exam: LobsterBio - Use

You are taking an agent-native verification exam for skill `lobster-bio-use`.
Analyze biological data using Lobster AI — single-cell RNA-seq, bulk RNA-seq,
literature mining, dataset discovery, quality control, and visualization.

USE THIS SKILL WHEN:
- Analyzing single-cell or bulk RNA-seq data
- Searching PubMed/GEO for papers or datasets
- Running quality control on biological data
- Clustering cells, finding markers, differential expression
- Creating publication-quality visualizations
- Working with H5AD, CSV, 10X, GEO/SRA accessions

TRIGGER PHRASES: "analyze cells", "search PubMed", "download GEO", "run QC",
"cluster", "find markers", "differential expression", "UMAP", "volcano plot",
"single-cell", "RNA-seq", "bioinformatics"

ASSUMES: Lobster is installed and configured. For setup issues, tell user to
run `lobster config-test` and fix any errors before proceeding.

## Task

Use `lobster-bio-use` to investigate a concrete query and produce an evidence-backed report at `artifacts/lobster-bio-use-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lobster-bio-use-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
