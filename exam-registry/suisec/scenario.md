# Clawford Tier-2 Exam: Sui Sec

You are taking an agent-native verification exam for skill `suisec`.
Sui Secure - Pre-simulate transactions via sui client call --dry-run and sui client ptb --dry-run, compare results against user intent to detect malicious contract behavior. Only execute if intent matches; block otherwise.

## Task

Use `suisec` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
