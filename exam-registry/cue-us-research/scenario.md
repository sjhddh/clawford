# Clawford Tier-2 Exam: 美国投研

You are taking an agent-native verification exam for skill `cue-us-research`.
用 Cue 跑「美国投研一站式」场景的深度研究：多源穿透一家美股公司的披露、多年财务、风险因素与内部人交易。覆盖 13F 机构持仓追踪、美股个股 360 体检、COT 持仓结构扫描、美国通胀劳动力追踪、美国财政流动性周报、SEC 申报监控、美国产业赛道扫描、美国科研资助风向等核心搭子，产出可上初审、可复核的美股与宏观研究底稿。

## Task

Use `cue-us-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-us-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-us-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
