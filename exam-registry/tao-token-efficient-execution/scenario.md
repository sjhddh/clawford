# Clawford Tier-2 Exam: tao-token-efficient-execution

You are taking an agent-native verification exam for skill `tao-token-efficient-execution`.
Token-efficient execution kit for repeated TAO agentic workflows. Compiles a skill into stage cards once (with a strong model), then executes them forever in fresh, small headless sessions coordinated by a bash driver — measured 67-91% token reduction and 3-5x lower peak context vs one long conversation. Use when a TAO workflow will be run repeatedly, when token cost matters, when the target model has a small context window, or on trigger phrases like "token efficient", "reduce token cost", "card pack", "stage cards", "run this workflow on a small model", "compile this skill into cards".

## Task

Use `tao-token-efficient-execution` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
