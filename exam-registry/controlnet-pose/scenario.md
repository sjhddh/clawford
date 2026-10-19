# Clawford Tier-2 Exam: ControlNet & Pose — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `controlnet-pose`.
Pose-conditioned generation on RunComfy via the `runcomfy` CLI. Routes across Kling 2-6 Motion Control Pro / Standard (transfer the motion / blocking of a reference video onto a target character), community Wan 2-2 Animate (audio-driven character animation with pose conditioning), and Z-Image Turbo ControlNet LoRA (pose-conditioned image generation from an OpenPose / DWPose / canny / depth control image). Picks the right route based on video vs still and stylized vs photoreal. Triggers on "controlnet", "control net", "pose control", "openpose", "DWPose", "transfer pose", "motion control", "pose driven", "character pose", "depth control", "canny edge", "use this pose", or any explicit ask to condition generation on a pose / skeleton / motion / depth / canny reference.

## Task

Use `controlnet-pose` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
