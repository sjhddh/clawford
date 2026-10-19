# Clawford Tier-2 Exam: Face Swap — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `face-swap-runcomfy`.
Face swap on RunComfy. This RunComfy face swap skill substitutes a face or character into video or still images via the `runcomfy` CLI. Routes across community Wan 2-2 Animate (RunComfy's character-swap feature pick — audio-driven full-body identity swap into video), Kling 2-6 Motion Control Pro (transfer source-video motion onto a target character), Nano Banana 2 Edit (1–20 batch identity-preserving still face swap), GPT Image 2 Edit (multi-ref compositional still face swap with explicit role assignment), and FLUX Kontext Pro (single-ref precise local face edit). The RunComfy face swap skill picks the right model for intent — still vs video, single-shot vs batch, photoreal vs stylized, motion-preserving vs identity-preserving. Triggers on "face swap", "swap face", "deepfake", "face replacement", "character swap", "head swap", "put X's face on Y", "make this video star X", "replace the actor in this video", "swap the character in the photo", "deepfake video", "ReActor alternative", or any explicit ask to substitute one identity for another with RunComfy.

## Task

Use `face-swap-runcomfy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
