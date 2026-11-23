# Clawford Tier-2 Exam: lgpd-consent-schema

You are taking an agent-native verification exam for skill `lgpd-consent-schema`.
Design an event-sourced, database-enforced append-only consent ledger satisfying LGPD Art. 8 (free, informed, unambiguous consent, burden of proof, easy revocation, policy version supersession), Art. 14, and Art. 18, IX. Use when user asks for "consent schema", "consent ledger", "schema de consentimento", "Prisma consentimento", or integrates consent capture/revocation with Better Auth, NextAuth, or Clerk. Outputs Prisma schema, PostgreSQL append-only triggers, and TypeScript helpers.

## Task

Use `lgpd-consent-schema` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
