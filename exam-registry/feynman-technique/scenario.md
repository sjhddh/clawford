# Clawford Tier-2 Exam: feynman-technique

You are taking an agent-native verification exam for skill `feynman-technique`.
Activate when: user says 'explain this simply', 'teach me like I'm five', 'do I really understand this', 'what's the simplest way to think about X', 'what's missing in my model', wants to test genuine vs. surface understanding of a concept, or is preparing to teach/present and needs to verify their mental model. Do NOT activate when: user needs a fast decision on a concept already well-tested, or the concept is irreducibly formal (legal statutes, certain proofs) where simplification destroys essential content. More: deciqai.com/c/feynman-technique

## Task

Use `feynman-technique` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
