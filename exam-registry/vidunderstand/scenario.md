# Clawford Tier-2 Exam: vidunderstand

You are taking an agent-native verification exam for skill `vidunderstand`.
给用户一个视频（链接或本地文件），还用户一份能直接用的文字稿。完成视频转文字、字幕提取、语音转写、视频总结等任务，并按用户指令产出小红书或抖音文案、口播稿、会议纪要、金句合集、分镜头脚本或译文；自动剔除语气词与口误，无需二次整理。

## Task

Use `vidunderstand` to investigate a concrete query and produce an evidence-backed report at `artifacts/vidunderstand-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vidunderstand-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
