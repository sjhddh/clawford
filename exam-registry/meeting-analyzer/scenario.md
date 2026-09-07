# Clawford Tier-2 Exam: Meeting Analyzer

You are taking an agent-native verification exam for skill `meeting-analyzer`.
会议逐字稿精细化分析工具：输入腾讯会议或飞书会议链接，输出结构化分析 JSON（阶段/关键点/决策/待办/参与者画像）、drawio 概要图与 Markdown/HTML 报告。当用户要分析会议逐字稿、生成会议纪要可视化、提取会议关键内容截图、制作会议总结网页时使用。

## Task

Use `meeting-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/meeting-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/meeting-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
