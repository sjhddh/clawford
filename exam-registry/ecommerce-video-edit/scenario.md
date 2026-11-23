# Clawford Tier-2 Exam: ecommerce-video-edit

You are taking an agent-native verification exam for skill `ecommerce-video-edit`.
Turn raw product footage into a TikTok ad with FFmpeg. Recuts creator, UGC or product footage into a 9:16 ecommerce ad for TikTok, TikTok Shop, Reels and Meta: the best moment moved to second 0, a text hook inside the safe zone, dead air cut, captions, a CTA end card, loudness at -14 LUFS, and one MP4 per hook for testing (plus a 4:5 feed cut and a cover frame). Every command was run on test media. Free and local; on the varg ffmpeg tool (credits) when the agent has no shell. Use when someone has footage of a product (a creator video, an unboxing, a demo, a winning ad) and wants it edited into an ad, wants new hooks on an existing ad, or wants it TikTok-ready. NOT for generating new footage (use product-photo-to-video or ai-ugc-ad-video), animated word-by-word captions (use a Remotion or HyperFrames caption skill), or generic crops and subtitles (use short-form-ffmpeg-cookbook).

## Task

Use `ecommerce-video-edit` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
