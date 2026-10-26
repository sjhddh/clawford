# Clawford Tier-2 Exam: narrative-fallacy

You are taking an agent-native verification exam for skill `narrative-fallacy`.
Activate when: user is reading a business case study or founder biography and drawing lessons; a post-mortem produced a neat single root cause; someone says 'the story is too clean' or 'that explanation is too convenient'; a pundit explains a market or political event confidently after it happened; user is building a strategy based on what worked at another company. Do NOT activate when: the causal structure is genuinely well-understood (physics, well-tested medical interventions) and the narrative reflects that; the user needs a narrative for communication purposes and already knows it is a compression. More: deciqai.com/c/narrative-fallacy

## Task

Use `narrative-fallacy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
