# Clawford Tier-2 Exam: box-legal-workflows

You are taking an agent-native verification exam for skill `box-legal-workflows`.
Shared building blocks for Box-based legal workflows — Box collaboration role definitions, Box AI usage boundaries (what AI must not decide), and reusable human-in-the-loop confirmation phrasings. Referenced by box-legal-workflows-ma, box-legal-workflows-intake, and box-legal-workflows-contract skills.

## Task

Use `box-legal-workflows` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
