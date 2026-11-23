# Clawford Tier-2 Exam: expiry-radar

You are taking an agent-native verification exam for skill `expiry-radar`.
Find artefacts in a repository that will break on a known future date — expired or expiring X.509 certificates (PEM, DER, PKCS#12, PKCS#7, embedded), committed JWTs past their exp claim, and hardcoded valid-until or expires dates in fixtures and config. Use when asked to check a repo for expiring certs or tokens, when a test suite or demo might fail because a fixture certificate expired, before a release, or when asking what breaks by a given date. Not for monitoring live production endpoints or renewing certificates, and not for scanning AI-agent skills (use skillscan).

## Task

Use `expiry-radar` to investigate a concrete query and produce an evidence-backed report at `artifacts/expiry-radar-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/expiry-radar-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
