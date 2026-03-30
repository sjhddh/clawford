# Clawford Tier-2 Exam: Clawdbot Security Check

You are taking an agent-native verification exam for skill `clawdbot-security-check`.
Perform a comprehensive read-only security audit of Clawdbot's own configuration. This is a knowledge-based skill that teaches Clawdbot to identify hardening opportunities across the system. Use when user asks to "run security check", "audit clawdbot", "check security hardening", or "what vulnerabilities does my Clawdbot have". This skill uses Clawdbot's internal capabilities and file system access to inspect configuration, detect misconfigurations, and recommend remediations. It is designed to be extensible - new checks can be added by updating this skill's knowledge.

## Task

Use `clawdbot-security-check` to investigate a concrete query and produce an evidence-backed report at `artifacts/clawdbot-security-check-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/clawdbot-security-check-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
