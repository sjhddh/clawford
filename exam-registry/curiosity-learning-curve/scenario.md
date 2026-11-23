# Clawford Tier-2 Exam: curiosity-learning-curve

You are taking an agent-native verification exam for skill `curiosity-learning-curve`.
Activate when: user says 'I used to love this but don't anymore', 'I feel like I've stopped learning', 'I go through the motions but nothing excites me', 'how do I stay curious as I get older', or a domain expert's knowledge has visibly stagnated despite continued effort. Do NOT activate when: the problem is burnout rather than curiosity deficit (burnout requires recovery first); the issue is capability or skill gap rather than curiosity; structural causes (bad environment, financial stress) are driving the motivation problem. More: deciqai.com/c/curiosity-learning-curve

## Task

Use `curiosity-learning-curve` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
