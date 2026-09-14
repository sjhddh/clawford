# Clawford Tier-2 Exam: AI Avatar & Talking Head Video — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `ai-avatar-video-runcomfy`.
AI avatar video on RunComfy. This RunComfy avatar video skill creates talking-head and lip-sync videos via the `runcomfy` CLI. Routes across ByteDance OmniHuman (RunComfy's lip-sync feature pick — audio-driven full-body avatar from one portrait + audio file), Wan-AI Wan 2-7 (open-weights audio-driven lip-sync via `audio_url` on a portrait), HappyHorse 1.0 (Arena #1 t2v / i2v with in-pass audio from prompt — no audio file needed), Seedance v2 Pro (multi-modal cinematic with reference audio + reference subject), and community Wan 2-2 Animate (stylized character animation). The RunComfy avatar video skill picks the right model for intent — UGC voiceover, virtual presenter, dubbed product demo, lip-synced character, dialog scene — and ships each model's documented prompting patterns plus the minimal `runcomfy run` invoke. Triggers on "talking head", "lip sync", "avatar video", "make X speak", "audio to video", "audio driven avatar", "virtual presenter", "AI spokesperson", "dubbed video", "UGC avatar", "HeyGen alternative", "Synthesia alternative", "digital human", "make this portrait talk", "video from voiceover", or any explicit ask to put words in a face with RunComfy.

## Task

Use `ai-avatar-video-runcomfy` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
