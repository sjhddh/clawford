# Clawford Tier-2 Exam: comparative-advantage

You are taking an agent-native verification exam for skill `comparative-advantage`.
Activate when: user says 'should I do this myself or delegate,' 'I'm the best at X so I should do it,' 'should we outsource or build in-house,' 'how should we divide work on the team,' 'is it worth hiring someone for this.' Do NOT activate when: the situation is genuinely single-task with no trade-off; the user is asking about competitive strategy between companies (use Porter's Five Forces instead). More: deciqai.com/c/comparative-advantage

## Task

Use `comparative-advantage` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
