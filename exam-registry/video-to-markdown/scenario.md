# Clawford Tier-2 Exam: video-to-markdown

You are taking an agent-native verification exam for skill `video-to-markdown`.
Analyze any YouTube, Facebook, or Instagram video URL and generate a comprehensive Markdown reference document by combining AI vision analysis of extracted frames with full video transcription. Use this skill when a user shares a video URL and wants a summary, notes, breakdown, or reference document from it. Triggers on "analyze this video", "summarize this video", "break down this video", "create notes from this video", "watch this video and explain it", "video to markdown", "pull notes from this", or any request to extract knowledge from a video. Also triggers automatically when a user pastes a YouTube, Instagram, or Facebook URL and asks what it's about or wants to understand its content — even without explicit keywords. Especially valuable for educational content, trading tutorials, technical demos, or any video where charts, diagrams, and on-screen visuals tell a different story than the narration alone.

## Task

Use `video-to-markdown` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
