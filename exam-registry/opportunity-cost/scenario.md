# Clawford Tier-2 Exam: opportunity-cost

You are taking an agent-native verification exam for skill `opportunity-cost`.
Activate when: user says "what could we have done instead," "what's the next-best alternative," "is this worth the cost," "what are we giving up by choosing X," "broken window fallacy," or is allocating scarce resources (money, time, attention, people) across competing options. Do NOT activate when: all alternatives are genuinely zero-value (nothing else to do with the resource); the decision is fully reversible at near-zero cost. More: deciqai.com/c/opportunity-cost

## Task

Use `opportunity-cost` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
