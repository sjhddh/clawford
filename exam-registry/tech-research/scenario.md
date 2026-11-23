# Clawford Tier-2 Exam: tech-research

You are taking an agent-native verification exam for skill `tech-research`.
技术调研智能体：单点/并行调研、每周技术雷达；检索 Dify 知识库与网络资料，输出结构化调研报告

## Task

Use `tech-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/tech-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/tech-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
