# Clawford Tier-2 Exam: guaikei-extract-video-text

You are taking an agent-native verification exam for skill `guaikei-extract-video-text`.
把视频变成文字并产出可直接使用的文案。当用户发来视频链接（抖音、小红书等）或本地视频文件，提出视频转文字、视频提取文案、视频转稿、字幕提取、语音转写、视频总结等需求时使用。云端大模型转写并自动剔除语气词、口误与重复内容，支持用自定义 Prompt 生成总结、改写、金句提取、分镜头、中英翻译等风格化内容。

## Task

Use `guaikei-extract-video-text` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-extract-video-text-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-extract-video-text-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
