# Clawford Tier-2 Exam: decision-tree

You are taking an agent-native verification exam for skill `decision-tree`.
Activate when: user says 'help me choose between two options with different risks', 'I need to map out what could happen if we go with X', 'we have a sequential decision — first we do A then depending on results we do B', 'what is the expected value of this investment given uncertain demand'. Do NOT activate when: the decision is a one-shot choice with no sequential stages (use simple EV instead); probabilities cannot be estimated even roughly and uncertainty is too deep to quantify. More: deciqai.com/c/decision-tree

## Task

Use `decision-tree` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
