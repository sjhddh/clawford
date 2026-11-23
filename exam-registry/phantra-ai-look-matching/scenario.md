# Clawford Tier-2 Exam: Phantra AI: Look Matching

You are taking an agent-native verification exam for skill `phantra-ai-look-matching`.
Sets the visual look of a Phantra scene from the person's elements and from an image or frame they describe or attach, says what each photo is FOR (its role), and explains what the studio can and cannot match. Use when someone says "make it look like this", attaches a reference image, asks for a mood, light or texture, or wants a photo used only for its light or palette. NOT for writing the whole scene (write-scene), prices (credits-and-limits), or finding or copying a real person's face.

## Task

Use `phantra-ai-look-matching` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
