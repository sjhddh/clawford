# Clawford Tier-2 Exam: 竞品专利动态 · PatentMax

You are taking an agent-native verification exam for skill `competitor-patent-brief`.
竞品专利动态、竞争对手最新专利。当用户说「看看某公司最近申请了什么专利」「竞争对手这几个月新公开了哪些专利」「对手最近在布局什么方向」「出一份竞品专利周报 / 月报」「某公司最近新授权的专利」时使用。输出竞品专利动态简报表（Excel 能打开）和本期要点。 Recent patent activity of competitors. Lists newly published and newly granted patents by competitor and technical direction, flags the ones worth attention, and summarizes where each competitor is heading.

## Task

Use `competitor-patent-brief` to investigate a concrete query and produce an evidence-backed report at `artifacts/competitor-patent-brief-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/competitor-patent-brief-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
