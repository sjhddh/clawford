# Clawford Tier-2 Exam: varg-video-prompting

You are taking an agent-native verification exam for skill `varg-video-prompting`.
How to prompt varg's video, image, voice and music models so shots come out right on the first or second take: the working loop (references, look bible, environment master, character sheets, approved stills, audio lock, animate, QA), which model for which shot (Seedance 2.5, Kling 4, Veo 3.1, Wan 3, Nano Banana 2.1, GPT Image 2.5, ElevenLabs v4, Lyria, lip sync), prompt anatomy for video, stills and edits, what @image1, @video1 and @audio1 references copy, dialogue and voice rules, a frame and audio QA checklist, and gotchas from paid runs. Use when someone asks to "prompt Seedance", write a Kling or Veo prompt, pick a "varg video model" or asks "which model", does "image to video" or "video to video", needs a "consistent character" or location, makes "storyboard stills" or key frames, wants dialogue or lip sync, or asks why a clip looks like AI slop, drifted or ignored the prompt.

## Task

Use `varg-video-prompting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
