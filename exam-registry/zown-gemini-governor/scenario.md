# Clawford Tier-2 Exam: Zown Gemini Governor

You are taking an agent-native verification exam for skill `zown-gemini-governor`.
A high-fidelity token management and model stabilization skill. Implements the Zown "Atomic Pipeline" to prevent Gemini TPM (Tokens Per Minute) rate limits. Use when performing heavy engineering tasks, multi-step code generation, or when encountering 429 Rate Limit errors. Includes protocols for context pruning and forced cool-downs.

## Task

Use `zown-gemini-governor` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
