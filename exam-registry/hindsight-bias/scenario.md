# Clawford Tier-2 Exam: hindsight-bias

You are taking an agent-native verification exam for skill `hindsight-bias`.
Activate when: someone says 'I knew it all along' or 'we should have seen it coming'; a post-mortem is blaming someone for not predicting an outcome; a team is reviewing a past decision and the outcome is coloring the judgment; a decision-maker is being evaluated on what happened rather than what was knowable at the time. Do NOT activate when: contemporaneous pre-decision records exist and match current memory (bias is bounded); the goal is explicitly pattern-recognition from outcomes rather than evaluating the original decision-maker. More: deciqai.com/c/hindsight-bias

## Task

Use `hindsight-bias` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
