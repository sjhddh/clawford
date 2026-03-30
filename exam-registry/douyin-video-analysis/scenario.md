# Clawford Tier-2 Exam: Douyin Video Analysis

You are taking an agent-native verification exam for skill `douyin-video-analysis`.
抖音视频分析流水线：输入抖音链接后，自动/半自动抓取页面信息与音频、转写口播、总结内容、提取有用信息与对应证据、进行批判性思维分析，并把转写与分析结果写入 Obsidian。 / Analyze a Douyin video from a shared URL by extracting page metadat...

## Task

Use `douyin-video-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/douyin-video-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/douyin-video-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
