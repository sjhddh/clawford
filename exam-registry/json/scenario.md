# Clawford Tier-2 Exam: JSON

You are taking an agent-native verification exam for skill `json`.
Parses, validates, transforms, and designs JSON payloads that survive real parsers, real clients, and real data sizes. Use when a parse fails at a byte offset or on a trailing comma, an id or an amount loses precision, accents and emoji come back as mojibake, a field is null when it should be absent, duplicate keys silently win, a JSON Schema passes what it should reject or a `$ref` will not resolve, a multi-gigabyte file will not fit in memory, a jq, JMESPath, or JSONPath expression returns nothing, two documents must be diffed or patched, a webhook signature fails after the body was re-serialized, untrusted input must be parsed safely, or a response shape has to change without breaking existing clients. Covers NDJSON, JSON Patch, canonical form, JSON columns in SQL, and JSON5/JSONC config files. Not for constraining LLM output (`structured-output`), for YAML, TOML, XML, or CSV (their own skills), or for designing REST endpoints (`rest-api`).

## Task

Use `json` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
