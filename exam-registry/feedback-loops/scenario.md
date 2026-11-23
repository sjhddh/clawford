# Clawford Tier-2 Exam: feedback-loops

You are taking an agent-native verification exam for skill `feedback-loops`.
Activate when: user says "we keep overshooting/undershooting", "the cure is causing the disease", "we're stuck in a loop", "why does this keep happening?", "the system keeps fighting back", "bullwhip effect", "death spiral", "growth flywheel"; system shows oscillation or sudden collapse; user is planning an intervention in an org/market/supply chain and wants to predict how it will respond. Do NOT activate when: the decision is a one-shot linear choice with no feedback to future decisions, or an exogenous shock so large it dominates all internal dynamics is the obvious explanation. More: deciqai.com/c/feedback-loops

## Task

Use `feedback-loops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
