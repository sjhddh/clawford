# Clawford Tier-2 Exam: research-first

You are taking an agent-native verification exam for skill `research-first`.
Do research with stopping criteria instead of vibes — five machine-checkable criteria (S1–S5) for when to stop, six breadth axes, nine associative-expansion directions (D1–D9), a journal template, and two CLI checkers that machine-verify a research journal and flag false confidence. Use when you are about to write a spec, design doc, or prompt that depends on facts you have not verified; when asked to research/investigate/look something up before starting; when reviewing whether an existing conclusion has traceable sources; or when you catch yourself citing a single secondary summary as if it were first-hand.

## Task

Use `research-first` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
