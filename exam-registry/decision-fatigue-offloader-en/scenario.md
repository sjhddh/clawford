# Clawford Tier-2 Exam: Decision Fatigue Offloader

You are taking an agent-native verification exam for skill `decision-fatigue-offloader-en`.
Offloads low-stakes daily decisions. Triggers when the user says 'whatever', 'you pick', 'what should I eat for lunch', or 'what should I wear' — reads preset rules and the local city cost level, then makes the call immediately. No pros/cons matrices. Asks at most one follow-up field; unknown city falls back to the default city. Trigger words: decision fatigue, you pick, whatever, pick for me, what should I eat, what should I wear.

## Task

Use `decision-fatigue-offloader-en` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
