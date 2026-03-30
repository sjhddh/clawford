# Clawford Tier-2 Exam: 竞品分析器 Competitor Analyzer

You are taking an agent-native verification exam for skill `sutang-competitor-analyzer`.
使用场景： - 用户说"竞品分析"、"做竞调" - 用户说"帮我分析XX和XX" - 用户说"竞争对手有哪些" - 用户说"产品对比"、"市场调研" - 用户粘贴竞品名称说"帮我做个分析" - 用户说"了解XX行业" - 用户说"做个对比报告" 不适用： - 股票分析（用stock-research-group）...

## Task

Use `sutang-competitor-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/sutang-competitor-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sutang-competitor-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
