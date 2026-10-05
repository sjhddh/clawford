# Clawford Tier-2 Exam: patent-family-analyzer

You are taking an agent-native verification exam for skill `patent-family-analyzer`.
同族专利深度分析工具。输入任意一件有同族的专利号，自动检索全部同族专利，绘制同族树状图，逐件分析技术问题/手段/效果/权利要求要点，分析技术关联性，生成主题交叉分析表，总结技术演进路线，最终输出交互式HTML报告。目标用户：专利分析师。

## Task

Use `patent-family-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-family-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-family-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
