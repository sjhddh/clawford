# Clawford Tier-2 Exam: dsgvo-audit

You are taking an agent-native verification exam for skill `dsgvo-audit`.
Multi-phase DSGVO/GDPR compliance audit skill and task list for agentic QA systems (Germany). Scans database schemas, controller files, auth, subject rights (export/erasure), log/stream leakage, and third-party processor integrations for GDPR/DSGVO compliance surface. Use when invoked as /dsgvo-audit, or asked for "DSGVO-Prüfung", "GDPR audit", "dsgvo check", or "compliance check".

## Task

Use `dsgvo-audit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
