# Clawford Tier-2 Exam: agent-bom ingest

You are taking an agent-native verification exam for skill `agent-bom-ingest`.
Validate and ingest operator-pushed agent-bom inventory JSON from AWS, Azure, GCP, Snowflake, CMDB, or endpoint collectors. Use when a user has canonical inventory JSON and wants local findings, graph, policy, provenance, or auditor-ready exports without giving agent-bom direct cloud credentials.

## Task

Use `agent-bom-ingest` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
