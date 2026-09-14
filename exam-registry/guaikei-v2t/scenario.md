# Clawford Tier-2 Exam: guaikei-v2t

You are taking an agent-native verification exam for skill `guaikei-v2t`.
将视频转为文字稿。适用于「把这个视频的文字提出来」「帮我转写这个视频」「视频总结一下」等指令。支持抖音、小红书等平台链接直连，也支持本地视频文件。云端大模型转写，输出剔除语气词后的通顺文案，可通过 Prompt 定制总结、改写、金句、分镜头、翻译等输出。

## Task

Use `guaikei-v2t` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-v2t-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-v2t-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
