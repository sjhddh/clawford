# Clawford Tier-2 Exam: Phantra AI: Price And Render

You are taking an agent-native verification exam for skill `phantra-ai-price-and-render`.
Prices a Phantra scene or still in credits, starts it on the person's yes, and reports where it stands. Every spend is quoted first, approved by the person in the chat, started with `approve` (a scene) or `generate_image` (one still), and read back with `job`. Use when someone says render it, make the clip or how much will it cost, or asks whether a scene is done. NOT for writing the scene (write-scene), an effect on something already made (effects) or credits in general (credits-and-limits).

## Task

Use `phantra-ai-price-and-render` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
