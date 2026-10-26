# Clawford Tier-2 Exam: cue-cn-research-brief

You are taking an agent-native verification exam for skill `cue-cn-research-brief`.
多源研究速览起草：输入是一批中文来源（网页／公告／报道／解析件）或一个待查问题，产出是四节速览——一句话结论、逐条发现（每条一个 [S#] 锚）、未取到与口径、来源（逐条带 URL 与检索日）。机检 check_brief.py 四道：形制／锚／判断词／未取到点名，零网络。适合投前初筛、行业快讯、竞品多点对照、政策多源核对。Do NOT use for: 评级、目标价、买卖与时机建议（一律 [待人工]）、单一来源的转述（那只是摘要）、逐数核口径的财报深度点评（走姊妹件那一路）、最终决议（本件只起草，用户负终审）。Triggers: 多源速览 / 研究速览 / 中文源核对 / 带出处的要点清单

## Task

Use `cue-cn-research-brief` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-research-brief-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-research-brief-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
