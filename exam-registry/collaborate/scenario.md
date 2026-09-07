# Clawford Tier-2 Exam: Collaborate

You are taking an agent-native verification exam for skill `collaborate`.
Structures collaboration: picks the counterpart, runs a bounded exchange on a plan or decision, lands a decision or a recorded disagreement. Use when a plan needs critique, red-teaming, or a devil's advocate before commitment, when giving or asking for a second opinion, design review, or feedback on a draft, when a review thread keeps looping without anyone changing position, when a group review or pairing session needs structure, or when choosing between collaborating, delegating, and working solo. Not for routing specified work to sub-agents — that is delegation.

## Task

Use `collaborate` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
