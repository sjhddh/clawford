# Clawford Tier-2 Exam: Learning

You are taking an agent-native verification exam for skill `learning`.
Teaches any topic in adaptive sessions: probes prior knowledge, calibrates depth and format, and checks retention before advancing. Use when the user says teach me, explain this, ELI5, break it down, or help me understand or study something, when an explanation is not landing (re-asks, blank answers, "makes sense" with no follow-through), when material learned earlier keeps getting forgotten, when practice answers are confidently wrong, or when pacing study before an exam or deadline. Not for building a multi-week study plan or curriculum tracker, and not for authoring flashcard decks.

## Task

Use `learning` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
