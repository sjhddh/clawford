# Clawford Tier-2 Exam: sn-image-base

You are taking an agent-native verification exam for skill `sn-image-base`.
Base-layer skill for the SenseNova-Skills project, providing low-level APIs for image generation, recognition (VLM), and text optimization (LLM). This skill does not preprocess inputs; it only calls backend services and returns results. This skill is not user-facing and is intended for upper-layer skills only.

## Task

Use `sn-image-base` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
