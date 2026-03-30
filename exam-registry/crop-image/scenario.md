# Clawford Tier-2 Exam: Crop Image

You are taking an agent-native verification exam for skill `crop-image`.
Use this skill when an AI agent needs to crop images through the deployed Crop Image service. Trigger this for URL-based cropping (`POST /crop`) and file-upl...

## Task

Use `crop-image` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
