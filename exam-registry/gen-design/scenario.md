# Clawford Tier-2 Exam: Gen Design

You are taking an agent-native verification exam for skill `gen-design`.
通过交互式技术选型生成系统设计文档。基于领域知识库进行数据模型设计和集成设计，确保设计与 PRD 数据流对齐。仅当用户要「生成系统设计文档」时使用；分析现有代码库请用 analyze，从代码反推设计主线请用 analyze --phase=deep。

## Task

Use `gen-design` to investigate a concrete query and produce an evidence-backed report at `artifacts/gen-design-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/gen-design-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
