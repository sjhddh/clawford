# Clawford Tier-2 Exam: Lipsync — Pro Pack on RunComfy

You are taking an agent-native verification exam for skill `lipsync`.
Lip-sync a face to a specific audio track on RunComfy via the `runcomfy` CLI. Routes across ByteDance OmniHuman (audio-driven full-body avatar from a portrait + audio), Sync Labs sync v2 / Pro (state-of-the-art mouth sync onto a video), Kling lipsync (audio-to- video and text-to-video with synced speech), and Creatify lipsync. The skill picks the right endpoint for the user's actual intent — portrait still + audio (avatar-style), source video + audio (mouth- swap on existing footage), or generate-and-sync from a script. Triggers on "lip sync", "lipsync", "make this video speak", "match audio to mouth", "dub video", "sync lips to voice", "Sync Labs", "voiceover sync", or any explicit ask to drive a face's mouth from an audio track.

## Task

Use `lipsync` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
