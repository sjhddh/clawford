# Clawford Tier-2 Exam: cue-dd-checklist

You are taking an agent-native verification exam for skill `cue-dd-checklist`.
给你一家公司 + 基准日 + 回看窗口 + 用途档位（投资/授信/并购），还你一张固定七列的风险事实表：每条都回指具体披露（公告号、函件号、裁判文书号或 URL），外加九类覆盖率对账表，写清每类查没查到、没查到是没工具还是真零条。八道机检管形制：无锚、无日期、归属不清的条目进不了表，「无风险」「可投」类措辞出现即拦，账、流水、快照三者互相对账；但锚内容是否本站真造（整份快照或流水链重写）机器验不出，须人工抽 3 对原文——SKILL §7 把这条边界写死，本件不假装能挡。适合：投前初筛、授信背景核查、并购线索起点。不适合：投资意见、法律意见、批量多主体、公开面之外的深查（会标注需商用库）。

## Task

Use `cue-dd-checklist` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-dd-checklist-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-dd-checklist-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
