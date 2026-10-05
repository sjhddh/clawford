# Clawford Tier-2 Exam: Elasticsearch

You are taking an agent-native verification exam for skill `elasticsearch`.
Designs, queries, and operates Elasticsearch: mappings, analyzers, query DSL, aggregations, bulk indexing, shard sizing, and cluster health. Use when writing a search query or an index mapping, when a search returns nothing or the wrong documents, when a term query on a text field returns zero hits without an error, when results rank badly, when aggregations fail with "fielddata is disabled", when the cluster turns yellow or red, when shards stay unassigned, when indexing is slow or a bulk request returns per-item errors, when disk hits the flood-stage watermark and indices go read-only, when circuit breakers trip, or when paging past 10,000 hits breaks. Covers ILM rollover, reindexing, snapshots, upgrades, kNN and hybrid vector search, autocomplete, synonyms and analyzers, nested modeling, geo queries, ES|QL, Painless, ingest pipelines, data streams, security, language clients, and OpenSearch compatibility. Not for standalone vector stores (vector-databases) or lightweight site search (meilisearch).

## Task

Use `elasticsearch` to investigate a concrete query and produce an evidence-backed report at `artifacts/elasticsearch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/elasticsearch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
