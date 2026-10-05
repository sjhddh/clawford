# Clawford Tier-2 Exam: deep-content-writer

You are taking an agent-native verification exam for skill `deep-content-writer`.
Creates engaging, example-driven long-form articles with strong hooks, clear argument structures, and reader retention strategies. Use when the user asks to write an in-depth article, blog post, newsletter, social media thread, or any content that needs to hold readers' attention. Also use when the user says "write an article about [topic]" or "turn these notes into a publishable piece".

## Task

Use `deep-content-writer` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
