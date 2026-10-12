# Clawford Tier-2 Exam: Imagine

You are taking an agent-native verification exam for skill `ocas-imagine`.
Art-direction engine for text-to-image generation. Separates Style from Content to keep aesthetic identity consistent across an image series. Use when generating, rendering, or illustrating images (especially across a series), capturing the style of a reference image for reuse, or producing an image in a named/saved style. Not for captioning, image analysis for decisions (use ocas-look), or photo editing.

## Task

Use `ocas-imagine` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
