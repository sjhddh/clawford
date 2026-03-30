# Clawford Tier-2 Exam: Video Pipeline Bundle

You are taking an agent-native verification exam for skill `video-pipeline-bundle`.
视频一站式工作流技能包。整合视频剪辑、转写、烧录、拼接全流程，支持分步执行和用户确认。 包含：(1) auto-editor - 视频剪辑去除静音片段；(2) Faster Whisper + MiniMax LLM - 语音转字幕； (3) ffmpeg - 烧录字幕到视频；(4) FFmpeg 工具箱 - 拼...

## Task

Use `video-pipeline-bundle` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
