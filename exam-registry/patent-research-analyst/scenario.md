# Clawford Tier-2 Exam: patent-research-analyst

You are taking an agent-native verification exam for skill `patent-research-analyst`.
科研立项专利检索与分析 Agent——输入技术问题与初步技术方案，自动执行「信息收集→多轮专利检索→五维分析（技术路线/立项查新/FTO风险/竞对跟踪/新公开专利）→HTML+Word双格式报告输出」全流程。融合 PatSnap 智慧芽全球专利数据，生成包含7章正文+3个附录的完整专利分析报告。触发词：专利检索分析、立项查新、FTO分析、技术路线分析、竞对跟踪、专利风险排查、帮我做专利检索。

## Task

Use `patent-research-analyst` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-research-analyst-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-research-analyst-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
