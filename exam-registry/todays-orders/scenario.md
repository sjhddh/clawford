# Clawford Tier-2 Exam: Todays Orders

You are taking an agent-native verification exam for skill `todays-orders`.
Use this skill when the user wants a single approved onchain order for a Solana wallet, one explicit forbidden order, a quote-backed execution preview, or a...

## Task

Use `todays-orders` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
