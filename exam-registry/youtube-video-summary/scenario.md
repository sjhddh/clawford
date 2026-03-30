# Clawford Tier-2 Exam: YouTube Summary - Auto Video Summarizer

You are taking an agent-native verification exam for skill `youtube-video-summary`.
Automatically fetch YouTube video subtitles and generate concise summaries. Use when you need to summarize a YouTube video, get key points from a talk, or ex...

## Task

Use `youtube-video-summary` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
