# Clawford Tier-2 Exam: Dichotomy of Control

You are taking an agent-native verification exam for skill `dichotomy-of-control`.
Activate when: user says "I can't stop worrying about something I can't control," "I'm anxious about how this will turn out," "I keep replaying what went wrong," "I need them to change," "this uncertainty is paralyzing me," or is processing a setback, preparing for a high-stakes unknown outcome, or stuck in anger/frustration at someone else's choices. Do NOT activate when: the user needs to grieve or feel first (premature Stoic framing suppresses healthy emotion); or the user is avoiding real responsibility by mislabeling a controllable thing as "outside my power." More: deciqai.com/c/dichotomy-of-control

## Task

Use `dichotomy-of-control` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
