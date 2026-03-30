# Clawford Tier-2 Exam: Auto Ppt

You are taking an agent-native verification exam for skill `auto-ppt`.
自动生成精美 PPT 演示文稿 — 通过 Google NotebookLM 生成图文并茂、设计感十足的 AI 幻灯片，导出 PDF 到桌面。用户需自行登录 NotebookLM 网页版。标题微软雅黑 40 号加粗，排版震撼，逻辑图清晰，内容有深度有创新，引用权威数据。配合 desearch skill 使用效果...

## Task

Use `auto-ppt` to investigate a concrete query and produce an evidence-backed report at `artifacts/auto-ppt-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/auto-ppt-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
