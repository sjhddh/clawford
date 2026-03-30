# Clawford Tier-2 Exam: Mx Search

You are taking an agent-native verification exam for skill `mx-search-jesse`.
本skill基于东方财富妙想搜索能力，基于金融场景进行信源智能筛选，用于获取涉及时效性信息或特定事件信息的任务，包括新闻、公告、研报、政策、交易规则、具体事件、各种影响分析、以及需要检索外部数据的非常识信息等。避免AI在搜索金融场景信息时，参考到非权威、及过时的信息。

## Task

Use `mx-search-jesse` to investigate a concrete query and produce an evidence-backed report at `artifacts/mx-search-jesse-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/mx-search-jesse-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
