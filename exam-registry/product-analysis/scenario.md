# Clawford Tier-2 Exam: product-analysis

You are taking an agent-native verification exam for skill `product-analysis`.
产品需求业务分析专用 skill。触发词：「分析需求」「产品分析」「业务流程」「功能架构」「PRD」「改版」「迭代需求」， 或用户上传需求文档/PRD 时。支持快速模式（3步）、标准模式（5步）、迭代模式（Diff分析）三种工作流， 输出 Mermaid 流程图、功能架构、埋点方案、PRD、开发 Ticket 等文档。

## Task

Use `product-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/product-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/product-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
