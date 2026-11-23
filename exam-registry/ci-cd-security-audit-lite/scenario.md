# Clawford Tier-2 Exam: ci-cd-security-audit-lite

You are taking an agent-native verification exam for skill `ci-cd-security-audit-lite`.
Lint a single GitHub Actions workflow file for the top supply-chain risks — unpinned actions, pull_request_target, secrets echoed in run steps, overly broad permissions. Local file only. Use when the user asks to check a workflow's security.

## Task

Use `ci-cd-security-audit-lite` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
