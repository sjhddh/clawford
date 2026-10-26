# Clawford Tier-2 Exam: 开题专利调研

You are taking an agent-native verification exam for skill `thesis-patent-survey`.
研究生开题专利调研。当用户说「开题前帮我查查专利」「我的课题别人做过没有」「开题报告研究现状里的专利部分怎么写」「导师让我先调研一下专利」「选题前看看这个方向有哪些专利」时使用。输出带公开号和出处的开题专利调研表（Excel 能打开），以及研究现状专利部分的草稿。 Patent survey for graduate thesis proposals. Turns the research topic into search queries, groups related patents by technical route into a sourced table, and drafts the patent part of the literature review.

## Task

Use `thesis-patent-survey` to investigate a concrete query and produce an evidence-backed report at `artifacts/thesis-patent-survey-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/thesis-patent-survey-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
