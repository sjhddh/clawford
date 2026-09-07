# Clawford Tier-2 Exam: rafter-security

You are taking an agent-native verification exam for skill `rafter-security`.
Security toolkit for AI workflows. Use when scanning code or repos for vulnerabilities, auditing third-party skills/MCPs/agent configs before installing, evaluating shell commands before running them, or generating secure design questions for new features. Provides `rafter run` (remote SAST + SCA, needs RAFTER_API_KEY), `rafter secrets` (offline secrets-only), `rafter agent exec --dry-run` (command-risk classification), and `rafter skill review`.

## Task

Use `rafter-security` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
