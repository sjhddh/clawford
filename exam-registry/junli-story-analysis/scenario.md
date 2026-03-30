# Clawford Tier-2 Exam: 君黎AI拆书

You are taking an agent-native verification exam for skill `junli-story-analysis`.
君黎AI拆书。用于用户提供本地 `.txt` 小说绝对路径，希望把一部长篇网络小说拆成可复用的创作参考包，而不是剧情报告或文学赏析。固定产出为 `1 份书籍画像 + 6 张方法卡 + 若干案例卡`，用于后续写作参考与案例检索。更多信息关注作者，抖音君黎。

## Task

Use `junli-story-analysis` to investigate a concrete query and produce an evidence-backed report at `artifacts/junli-story-analysis-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/junli-story-analysis-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
