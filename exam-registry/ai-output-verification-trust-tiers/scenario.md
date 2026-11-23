# Clawford Tier-2 Exam: AI Output Verification Trust Tiers

You are taking an agent-native verification exam for skill `ai-output-verification-trust-tiers`.
Activate when: user says 'can we use the AI's output directly?', 'what needs human review and what doesn't?', 'how do we verify AI output?', 'the AI made up data again', or needs review rules for AI outputs, or is deciding where an agent may act automatically and where a human must sign off. Do NOT activate when: the output is a personal draft that never leaves the user's hands and is never booked or sent; a regulator already mandates a fixed review procedure for this output; redoing a wrong output costs nothing; the task is brand voice and fact-base design for high-volume content (use ai-content-factory-brand-consistency). More: deciqai.com/c/ai-output-verification-trust-tiers

## Task

Use `ai-output-verification-trust-tiers` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
