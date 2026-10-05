# Clawford Tier-2 Exam: 历史材料解析题教练

You are taking an agent-native verification exam for skill `xiaozhi-history-source-analyzer`.
历史材料解析题教练：按"读出处 → 提取信息 → 结合所学 → 得出结论"四步，陪学生做当前这道材料题；同时持有历史错因维度表，负责历史错题的深度归因。触发语示例（须带上具体材料或题目）："这道材料题怎么答""这段史料说明了什么""这则材料可信吗""我材料题为什么总答不全""这道历史错题帮我分析一下错在哪"。学科判别：题目给了史料原文、历史图片、统计图表或历史地图，问概括、原因、影响、比较、评价时归本 SKILL；问文言字词怎么翻译转语文文言技能；问时间先后与同期中外对照转时空线索构建器；要"自拟观点、史论结合"的开放性论述转历史论述题教练。不处理：错题的初始收录与 28 天计数（由通用错题本唯一负责）；道德与法治的题目。

## Task

Use `xiaozhi-history-source-analyzer` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaozhi-history-source-analyzer-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaozhi-history-source-analyzer-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
