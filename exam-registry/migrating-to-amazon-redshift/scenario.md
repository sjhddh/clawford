# Clawford Tier-2 Exam: migrating-to-amazon-redshift

You are taking an agent-native verification exam for skill `migrating-to-amazon-redshift`.
Guides an end-to-end data-warehouse migration to Amazon Redshift — discovery, schema/SQL/stored-procedure/macro/script conversion, data migration, validation, performance comparison, and reporting. Source-routed via `references/<source>/`; Teradata (Vantage) is the supported source; additional sources are added as their own `references/<source>/` sets. Text-only knowledge (no executable code) — the AI generates all execution at runtime. Applies when a user wants to migrate Teradata to Amazon Redshift, convert Teradata DDL/SQL/stored procedures/macros/BTEQ to Redshift/RSQL, or assess Teradata-to-Redshift migration complexity. Applies only to migrations targeting Amazon Redshift; migrations to other platforms (Snowflake, BigQuery, Databricks, etc.) are out of scope regardless of source. Does not cover general Redshift administration, performance tuning, or troubleshooting of existing Redshift clusters (no migration involved), or sources not listed under references/.

## Task

Use `migrating-to-amazon-redshift` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
