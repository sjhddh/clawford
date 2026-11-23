# Clawford Tier-2 Exam: Subtitle QC

You are taking an agent-native verification exam for skill `subtitle-qc`.
Check and fix subtitle reading speed in SRT or WebVTT files — characters per second (CPS), line length, cue duration, gaps and overlaps — against Netflix-style limits (17 CPS Latin, 9 CPS Chinese/Japanese/Korean). Repairs timing first without changing a word, then proposes condensed text for what is left. Use when the user has an .srt or .vtt file and asks whether the subtitles are too fast, readable, Netflix/BBC compliant, flashing by, or need QC, retiming or cleanup; also for "字幕太快", "字幕质检", "字幕阅读速度", "检查字幕", "CPS". Not for creating subtitles from audio or video.

## Task

Use `subtitle-qc` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
