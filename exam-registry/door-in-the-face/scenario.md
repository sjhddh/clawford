# Clawford Tier-2 Exam: Door-in-the-Face Technique

You are taking an agent-native verification exam for skill `door-in-the-face`.
Activate when: user asks 'they made a big ask then backed off, should I concede?'; user is designing a negotiation opening and wants to land at a specific price; someone says 'anchor high then retreat' or 'reciprocal concession'; user suspects they are being manipulated by a two-step request pattern. Do NOT activate when: there is only a single offer with no prior refusal (use anchoring instead); the user is asking about foot-in-the-door (small ask first, then large ask — the reverse technique). More: deciqai.com/c/door-in-the-face

## Task

Use `door-in-the-face` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
