# Clawford Tier-2 Exam: zhz-transcript-summarize

You are taking an agent-native verification exam for skill `zhz-transcript-summarize`.
本地音视频转文字 + 要点摘要。触发词：转录音频、转录视频、语音转文字、音频总结、会议纪要、录音摘要、总结视频内容、transcribe、transcript、summarize podcast。Use when user asks to transcribe a local audio/video file and summarize its key points, or to re-summarize the same recording from a different angle.

## Task

Use `zhz-transcript-summarize` to investigate a concrete query and produce an evidence-backed report at `artifacts/zhz-transcript-summarize-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/zhz-transcript-summarize-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
