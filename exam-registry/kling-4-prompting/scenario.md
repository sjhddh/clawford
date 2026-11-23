# Clawford Tier-2 Exam: kling-4-prompting

You are taking an agent-native verification exam for skill `kling-4-prompting`.
How to prompt Kling 4 (Kling 4.0, kling_v4) for cinematic AI video that does not look like AI slop: let a strong image model compose every shot, then give Kling 4 two to four key frames and a short director's prompt. Covers reference-to-video inputs (@Image, @Element, @Video, @Voice), multi-shot prompts with seconds, 30-second takes, dialogue in quotes, "no slow motion", lens and film-look lines, prompts that fail and their rewrites, elements that need two photos, the failure fixes (slow motion by default, six fingers, AI-smooth framing, face drift in close-ups) and the exact varg call with the reference route pinned. Use when someone asks how to prompt Kling 4, why Kling 4 looks worse than Seedance 2.5, how to use Kling 4 reference-to-video, elements, multi_prompt or keyframes, or wants a Kling 4 prompt written. For a whole short film use kling-4-keyframe-film; for a 30-second action montage use kling-4-action-montage.

## Task

Use `kling-4-prompting` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
