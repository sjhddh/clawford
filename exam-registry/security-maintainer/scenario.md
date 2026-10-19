# Clawford Tier-2 Exam: security-maintainer

You are taking an agent-native verification exam for skill `security-maintainer`.
Universal security maintenance skill for Windows, macOS, and Linux/WSL. Audits host and environment software, correlates with vulnerability feeds (OSV, CISA KEV, VulnCheck KEV, FIRST EPSS, NIST NVD, MSRC), audits AI & Agent security (OWASP LLM Top 10, prompt injections, unauthenticated local LLM services, MCP tool poisoning, API key exposure), and executes cryptographic-hash approved updates with post-remediation verification.

## Task

Use `security-maintainer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
