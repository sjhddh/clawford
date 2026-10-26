# Clawford Tier-2 Exam: 专利监控

You are taking an agent-native verification exam for skill `patent-watch`.
专利监控、专利预警。当用户说「帮我盯着这几个对手的专利」「每个月看看这个方向有没有新专利」「建一个专利监控」「跑一下上次的监控」「新公开的专利有哪些」时使用。输出监控清单（可反复使用）和每次的新增专利简报（Excel 能打开）。 Builds a reusable patent watch list of competitors and technologies with queries and a baseline; each later run finds patents published since the last run and summarizes them.

## Task

Use `patent-watch` to investigate a concrete query and produce an evidence-backed report at `artifacts/patent-watch-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/patent-watch-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
