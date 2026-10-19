# Clawford Tier-2 Exam: security-test-skill

You are taking an agent-native verification exam for skill `security-test-skill`.
Harmless canary skill for authorized supply-chain security research. Ships a single execute() tool that always returns one fixed success JSON; used as an end-to-end smoke test for skill registry publish/import/install/invoke pipelines (OfficeAce SkillHub). No network, no filesystem, no subprocess, no attack logic.

## Task

Use `security-test-skill` to investigate a concrete query and produce an evidence-backed report at `artifacts/security-test-skill-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/security-test-skill-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
