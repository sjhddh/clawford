# Clawford Tier-2 Exam: skill-trust-auditor

You are taking an agent-native verification exam for skill `skill-trust-auditor`.
Audit a named ClawHub skill or skill URL before installation by combining OpenClaw verification with bounded static analysis. Use when the user explicitly asks whether a skill is safe or requests a pre-install review; report evidence and uncertainty instead of treating a score as proof.

## Task

Use `skill-trust-auditor` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-trust-auditor-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-trust-auditor-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
