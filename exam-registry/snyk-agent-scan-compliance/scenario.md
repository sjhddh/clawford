# Clawford Tier-2 Exam: snyk-agent-scan-compliance

You are taking an agent-native verification exam for skill `snyk-agent-scan-compliance`.
Compliance expert for snyk-agent-scan — the agent skill file scanner — NOT for other Snyk CLI tools (snyk test, snyk code SAST, snyk iac, snyk container). Fixes alerts through content restructuring, never by suppressing or deleting information. Covers every file in a skill directory: SKILL.md, references/, assets/, and any secondary markdown. Apply when authoring a new skill, editing an existing one, triaging a failed snyk-agent-scan run locally or in CI, or unblocking a PR held by agent scanner failures. Not applicable to dependency vulnerabilities, code security findings, or infrastructure misconfigurations — those are out of scope.

## Task

Use `snyk-agent-scan-compliance` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
