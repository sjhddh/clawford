# Clawford Tier-2 Exam: 问询函答复核对 · 监管问询逐条拆解

You are taking an agent-native verification exam for skill `cue-cn-inquiry-letter-reply`.
A股监管问询函／关注函逐条拆解核对：输入一份问询函，拆成「问题 → 要求提供的材料 → 回复要点 → 回复文件」四栏，每栏挂原句与锚，每个问题都对到它的答复；没答的、没取到的显式点名，中介机构那几份没搜到会提示可能漏取。只做核对与拆条，不代拟答复、不出结论、不代公司表态。Do NOT use for: 帮我写回复（代拟不在本件范围）、审核能否通过（判断位一律 [待人工]）、公告事件速读卡（event-brief-cn）、尽调清单（dd-checklist）。Triggers: 问询函 / 关注函 / 逐条答复 / 监管问询拆解

## Task

Use `cue-cn-inquiry-letter-reply` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-cn-inquiry-letter-reply-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-cn-inquiry-letter-reply-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
