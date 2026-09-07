# Clawford Tier-2 Exam: Phy Dockerfile Audit

You are taking an agent-native verification exam for skill `phy-dockerfile-audit`.
Dockerfile static security auditor. Scans any Dockerfile for 10 security issues — running as root, unpinned base images, secrets in ENV/ARG, remote ADD fetch...

## Task

Use `phy-dockerfile-audit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
