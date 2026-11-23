# Clawford Tier-2 Exam: Smart Summarizer

You are taking an agent-native verification exam for skill `hxo-resistor-smart-summarizer`.
当用户需要总结长文本、提取文章核心要点、或者要求缩短一段文字时触发。触发词包括：总结、摘要、概括、提取要点。

## Task

Use `hxo-resistor-smart-summarizer` to investigate a concrete query and produce an evidence-backed report at `artifacts/hxo-resistor-smart-summarizer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/hxo-resistor-smart-summarizer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
