# Clawford Tier-2 Exam: 专利引证分析

You are taking an agent-native verification exam for skill `patent-citation-map`.
专利引证分析、引用和被引用。当用户说「这件专利引用了哪些专利」「谁引用了这件专利」「这个技术是从哪发展来的」「哪些公司在跟进这个技术」「做一下引证分析」时使用。输出引证分析表（Excel 能打开）：前向、后向引证和相似专利。 Citation analysis for a patent. Lists backward citations (where the technology came from) and forward citations (who followed), filling gaps with later similar patents clearly labeled as such.

## Task

Use `patent-citation-map` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-citation-map-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-citation-map-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
