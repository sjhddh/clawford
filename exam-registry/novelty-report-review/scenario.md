# Clawford Tier-2 Exam: Scientific and Technological Novelty Search Report Review

You are taking an agent-native verification exam for skill `novelty-report-review`.
根据《科技查新技术规范》对科技查新报告进行专业审核，按"只报问题"原则逐步检查查新点理解、检索词与中英文翻译、检索式构造、文献筛选合理性，最终仅输出需要注意和优化改进的事项。适用于用户提到"科技查新报告""查新报告审核""报告质量审查"等场景。

## Task

Use `novelty-report-review` to investigate a concrete query and produce an evidence-backed report at `artifacts/novelty-report-review-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/novelty-report-review-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
