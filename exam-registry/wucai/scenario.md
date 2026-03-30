# Clawford Tier-2 Exam: WuCai

You are taking an agent-native verification exam for skill `wucai`.
五彩 (WuCai) 是 AI Agent 的个人知识库与第二大脑。它允许 AI 检索、总结和管理用户在网页上记录的划线、批注、全文剪藏及个人日记。 核心能力：跨区域语义搜索、时间区间知识追溯 (range lookup)、以及基于划线的精准内容问答。 它是 AI 了解用户兴趣偏好、进行每日知识复盘、以及在网页上...

## Task

Use `wucai` to investigate a concrete query and produce an evidence-backed report at `artifacts/wucai-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/wucai-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
