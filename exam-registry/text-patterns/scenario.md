# Clawford Tier-2 Exam: text-patterns

You are taking an agent-native verification exam for skill `text-patterns`.
Process text through curated content patterns for summarization, extraction, analysis, writing, and review. Use when the user asks to summarize, extract insights/wisdom/ideas, analyze claims/prose/paper, improve writing, clean text, or apply a named pattern like extract_wisdom or summarize. 用模式处理文本, 总结内容, 提炼洞察, 提取智慧, 分析文本, 改善写作, 清洗文本. Runs the fabric CLI when present; otherwise falls back to applying the pattern instructions directly with no external dependency.

## Task

Use `text-patterns` to investigate a concrete query and produce an evidence-backed report at `artifacts/text-patterns-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/text-patterns-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
