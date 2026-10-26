# Clawford Tier-2 Exam: logical-fallacies

You are taking an agent-native verification exam for skill `logical-fallacies`.
Activate when: someone says 'this argument feels off but I can't explain why', 'is this a real argument or just rhetoric?', 'what's wrong with this reasoning?', an argument relies entirely on authority/emotion/popularity, or you're about to decide based on a single analogy. Do NOT activate when: the conclusion is already verifiable empirically (just check the data); casual conversation where rigor is socially expensive and stakes are low. More: deciqai.com/c/logical-fallacies

## Task

Use `logical-fallacies` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
