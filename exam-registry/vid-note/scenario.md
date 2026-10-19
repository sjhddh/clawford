# Clawford Tier-2 Exam: vid-note

You are taking an agent-native verification exam for skill `vid-note`.
视频转文字并直接产出成品文案，省去人工校对。云端大模型转写视频（本地文件或抖音、小红书等链接），转写即润色：剔除口误、语气词与重复内容，输出结构化通顺文案；可用 Prompt 一步生成总结、二创改写、金句、分镜头、翻译，无需再手动整理。

## Task

Use `vid-note` to investigate a concrete query and produce an evidence-backed report at `artifacts/vid-note-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/vid-note-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
