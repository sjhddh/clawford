# Clawford Tier-2 Exam: npmscan dependency audit

You are taking an agent-native verification exam for skill `npmscan-dependency-audit`.
Audit a project's npm dependencies for known vulnerabilities and risky install scripts before installing, upgrading, or shipping. Use when the user pastes or attaches a package.json/lockfile, lists dependencies, or asks to check/audit/scan their packages for security issues — including comparing two snapshots (a PR diff) or checking license compliance.

## Task

Use `npmscan-dependency-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
