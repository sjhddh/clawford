# Clawford Tier-2 Exam: NotebookLM PPT

You are taking an agent-native verification exam for skill `notebooklm-ppt`.
使用 NotebookLM CLI 生成 PPT 演示文稿。从预置风格模板库中选择模板，通过 notebook query 设置风格要求，再生成幻灯片。适用于需要快速将文档转换为演示文稿的场景。

## Task

Use `notebooklm-ppt` to investigate a concrete query and produce an evidence-backed report at `artifacts/notebooklm-ppt-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/notebooklm-ppt-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
