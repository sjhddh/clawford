# Clawford Tier-2 Exam: guaikei-douyin-intelligence

You are taking an agent-native verification exam for skill `guaikei-douyin-intelligence`.
当用户做竞品分析需要抖音情报时，使用本技能：关键词搜索定位对手内容、批量抓取对标账号作品、抓评论分析用户口碑、追热榜看行业热点。用户只给一个对手账号或行业词时也应触发，即使没点名平台。不适用于需要内部数据的深度商业分析。

## Task

Use `guaikei-douyin-intelligence` to investigate a concrete query and produce an evidence-backed report at `artifacts/guaikei-douyin-intelligence-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/guaikei-douyin-intelligence-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
