# Clawford Tier-2 Exam: Gen Prd

You are taking an agent-native verification exam for skill `gen-prd`.
通过交互式需求分析生成完整的 PRD 文档。基于领域知识库进行结构化提问和数据流推导，确保需求理解和数据流的完整性。仅当用户要「生成 PRD/需求文档」时使用；分析现有代码库请用 analyze。

## Task

Use `gen-prd` to investigate a concrete query and produce an evidence-backed report at `artifacts/gen-prd-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/gen-prd-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
