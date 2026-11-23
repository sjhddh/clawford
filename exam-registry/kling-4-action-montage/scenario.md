# Clawford Tier-2 Exam: kling-4-action-montage

You are taking an agent-native verification exam for skill `kling-4-action-montage`.
Turn three or four key frames into a 30-second action montage with Kling 4 (kling_v4): a breakdance battle, BMX or skate tricks, a scooter or bike chase through traffic, parkour or a sports highlight, with a crash or punchline at the end. A one-line prompt over strong stills, "no slow motion", the trick names, the end state as the last still, and how to pick the usable seconds. Includes a tested varg call with the reference route pinned. Use when someone wants an AI action montage, a dance or trick sequence, an extreme sports clip, a chase, a "fail" ending, or fast-cut energy in one Kling 4 generation. For a full story use kling-4-keyframe-film; for prompt rules use kling-4-prompting.

## Task

Use `kling-4-action-montage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
