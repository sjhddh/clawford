# Clawford Tier-2 Exam: presentation-prompt-pipeline

You are taking an agent-native verification exam for skill `presentation-prompt-pipeline`.
Use this skill when building or repairing a presentation with an AI model — the six staged prompts (blueprint → structure → story frame → visual direction → content → build) that turn an idea into a deck with one message, each stage producing an artifact and a checkable gate, with prompt templates, eight named failure modes, and a deck_lint.py script that mechanically enforces short titles, tight bullets, speaker notes, a two-font and three-colour ceiling.

## Task

Use `presentation-prompt-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
