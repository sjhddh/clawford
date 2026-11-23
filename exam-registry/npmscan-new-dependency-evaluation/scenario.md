# Clawford Tier-2 Exam: npmscan new dependency evaluation

You are taking an agent-native verification exam for skill `npmscan-new-dependency-evaluation`.
Help decide what to add as a NEW npm dependency — comparing 2-5 named candidates for the same job, evaluating one named candidate against its real peers, or shortlisting candidates from a described need, before anything is installed. Use for "which should we use for X," "axios vs got vs node-fetch," "is X a good pick for Y," "what should we use to do Z," "should we add X or is there something better." Not for auditing packages already in the project (see dependency-audit), not for a deep single-package compromise/trust investigation (see package-trust-check), and not for a plain factual question with no choice being made ("what does X do").

## Task

Use `npmscan-new-dependency-evaluation` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
