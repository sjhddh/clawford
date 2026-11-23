# Clawford Tier-2 Exam: lgpd-vendor-audit

You are taking an agent-native verification exam for skill `lgpd-vendor-audit`.
Classify third-party privacy roles (operator, independent controller, joint controller) and conduct due diligence under LGPD Arts. 39 and 42. Use when user asks 'auditar fornecedor', 'vendor audit LGPD', 'operadores LGPD', 'devida diligência', or onboarding/reviewing external SDKs, APIs, cloud, payment, or analytics providers. Produces vendor role & tier assessments in `.lgpd/vendors/` and remediation items in `.lgpd/gaps.md`.

## Task

Use `lgpd-vendor-audit` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
