# Clawford Tier-2 Exam: 证据检索与 Grounding (Agentic AI 科研平台)

You are taking an agent-native verification exam for skill `agentic-evidence-retriever`.
检索 PubMed 文献、临床指南与试验注册信息，提取证据摘要并生成 Research Grounding 建议（推荐终点定义、时间窗、混杂因素）。当用户需要做文献检索或证据 grounding 时触发。

## Task

Use `agentic-evidence-retriever` to investigate a concrete query and produce an evidence-backed report at `artifacts/agentic-evidence-retriever-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/agentic-evidence-retriever-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
