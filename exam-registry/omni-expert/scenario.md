# Clawford Tier-2 Exam: omni-expert

You are taking an agent-native verification exam for skill `omni-expert`.
Universal cross-domain problem-solving skill that transforms WorkBuddy into an all-capable consultant. This skill should be used when the user's request spans multiple domains (technology, business, creative, data, operations), when no single specialized skill fits, when the user wants an end-to-end solution from idea to delivery, or when the user explicitly asks for a universal/omni approach. It provides a structured 5-phase execution workflow, cross-domain problem diagnosis framework, and quality-guaranteed delivery standards.

## Task

Use `omni-expert` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
