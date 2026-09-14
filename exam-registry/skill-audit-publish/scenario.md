# Clawford Tier-2 Exam: Skill Audit & Publish

You are taking an agent-native verification exam for skill `skill-audit-publish`.
Audit-first pipeline to publish an OpenClaw skill to ClawHub without leaking personal data, credentials, or model-specific references. Five stages — Sanitize, Transform, Verify, Publish, Install-check — with explicit user approval before every irreversible step. Use this when the user wants to publish a skill to ClawHub, sanitize a skill before publishing, run a pre-publish PII/secret audit, or follow the ClawHub publish workflow. Bundled helper script: scripts/sync_skill_to_github.js mirrors a publish folder to a GitHub repo via the GitHub Contents API using a user-supplied token (GITHUB_TOKEN/GITHUB_PAT env var); it only creates or updates files and never deletes anything. Trigger phrases: 'publish to ClawHub', 'publish my skill', 'sanitize before publish', 'pre-publish checklist', 'clawhub publish command', 'upload a skill to clawhub'.

## Task

Use `skill-audit-publish` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
