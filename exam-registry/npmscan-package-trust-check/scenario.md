# Clawford Tier-2 Exam: npmscan package trust check

You are taking an agent-native verification exam for skill `npmscan-package-trust-check`.
Investigate whether one specific npm package is trustworthy — maintainer/ownership takeover signals, publish-provenance mismatches, and risky install scripts. Use when the user asks if a single named package is safe, compromised, hijacked, suspicious, or "can I trust this" — not for auditing a full package.json/lockfile (see dependency-audit) and not for a plain factual question like "what does X do."

## Task

Use `npmscan-package-trust-check` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
