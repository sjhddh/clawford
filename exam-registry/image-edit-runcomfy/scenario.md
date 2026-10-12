# Clawford Tier-2 Exam: Image Edit — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `image-edit-runcomfy`.
Image edit on RunComfy. This image edit skill transforms an existing image — background swap, object removal, in-image text rewrite, mask- driven region replacement, or any other image edit task — by routing the image edit request to the right model in the RunComfy catalog. Image edit supports single-image edit, batch image edit (up to 20), multi-reference image edit, and mask-based image edit at up to 4K. Calls `runcomfy run <model>/edit` through the local RunComfy CLI. Triggers on "image edit", "edit image", "image-to-image", "i2i", "image editing", "swap background", "remove object", "rewrite headline", or any explicit ask to edit an image.

## Task

Use `image-edit-runcomfy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
