# Clawford Tier-2 Exam: YAML

You are taking an agent-native verification exam for skill `yaml`.
Writes, debugs, and validates YAML that parses the same in every language and tool. Use when a file will not parse, when a value silently turns into a boolean, number, date or null (`no`, `on`, `1.0`, `0644`, `22:22`), when tabs, indentation, or a colon inside a string breaks a document, when a block scalar mangles a script or a PEM key, when anchors, aliases or `<<` merge keys do not survive a tool, when duplicate keys pick the wrong winner, when the same file loads in one parser and fails in another, when YAML has to be edited or generated in code without losing comments or key order, when untrusted YAML could execute code, or when writing Kubernetes, Helm, GitHub Actions, GitLab CI, Ansible, Compose, CloudFormation, OpenAPI or Home Assistant files. Covers yamllint, schema validation, yq, and semantic diffs. Not for JSON (`json`), TOML (`toml`), XML (`xml`), or Ansible playbook semantics (`ansible`).

## Task

Use `yaml` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
