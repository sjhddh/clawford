# Clawford Tier-2 Exam: representativeness-heuristic

You are taking an agent-native verification exam for skill `representativeness-heuristic`.
Activate when: user says 'this person/startup looks like a winner', 'I know one when I see it', 'they have the profile of a great hire', 'this reminds me of [famous success]', or any judgment where a vivid profile drives a probability estimate without an explicit base rate. Also activate when auditing for the conjunction fallacy or when pattern-matching is cited as the basis for a high-stakes decision. Do NOT activate when: probability is computed directly from data with no narrative element; base rate and profile have already been reconciled via explicit Bayesian reasoning. More: deciqai.com/c/representativeness-heuristic

## Task

Use `representativeness-heuristic` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
