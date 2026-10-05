# Clawford Tier-2 Exam: toolbelt

You are taking an agent-native verification exam for skill `toolbelt`.
Toolbelt is a collaborative substrate over your data. Upload any document — entities and relationships extracted automatically, queryable immediately. Ask questions that span structured tables, documents, and relationships in a single call. No stitching databases together. Toolbelt orchestrates semantic, structured, and hybrid retrieval through one MCP server — vector, knowledge graph, SQL, geospatial, streaming. Share the URL and any agent can query the same workspace — like a shared Google Doc for your data. Built by Kinetica. Use this skill at the start of any task where an agent needs to ingest documents and have entities/relationships auto-extracted, query structured + unstructured data together in natural language, or share findings with other agents across sessions. The skill handles first-time setup: provisions a free Toolbelt account if none exists, configures the MCP connection in the agent's client, and hands off to Toolbelt's MCP tools for the actual work. NOT for one-off lookups that don't benefit from automatic extraction, hybrid retrieval, or shared state — use the agent's native tools for those.

## Task

Use `toolbelt` to investigate a concrete query and produce an evidence-backed report at `artifacts/toolbelt-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/toolbelt-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
