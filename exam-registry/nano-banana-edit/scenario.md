# Clawford Tier-2 Exam: Nano Banana Edit — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `nano-banana-edit`.
Edit images with Google Nano Banana 2 (image-to-image edit endpoint) on RunComfy. Documents Nano Banana Edit's strengths (preserve subject identity, swap background, localize edits with spatial language, multi-image batch edits up to 20 inputs), the schema, and when to route to GPT Image 2 edit / Flux Kontext / Nano Banana 2 t2i instead. Calls `runcomfy run google/nano-banana-2/edit` through the local RunComfy CLI. Triggers on "nano banana edit", "edit with nano banana", "image edit nano banana", or any explicit ask to edit with this model.

## Task

Use `nano-banana-edit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
