# Clawford Tier-2 Exam: Qwen视频智能分析

You are taking an agent-native verification exam for skill `qwen-video-analyzer`.
基于Qwen 3.5 Plus多模态模型，支持本地视频和远程URL，按自定义抽帧频率智能分析视频场景、动作、物体及生成内容摘要。

## Task

Use `qwen-video-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/qwen-video-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qwen-video-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
