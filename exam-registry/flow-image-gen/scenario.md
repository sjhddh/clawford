# Clawford Tier-2 Exam: Flow Image Gen

You are taking an agent-native verification exam for skill `flow-image-gen`.
Generate the storyboard images for a short-form video job. Walks the image_prompts[] array from a job's input.json, calls Google's Gemini image model to rend...

## Task

Use `flow-image-gen` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
