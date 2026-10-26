# Clawford Tier-2 Exam: cue-tear-sheet

You are taking an agent-native verification exam for skill `cue-tear-sheet`.
给你一家公司（名或代码），产出一页速览五段：身份三行（主营句取披露原文、禁自造简介）；近四期速览（营收/归母/扣非/经营现金流，累计+单季双口径带标签）；在场事件 ≤4 条（先过入类第一闸：明确披露日期或 statute 锚内条件可判）；风险 1–3 条仅收直查命中，无命中必写固定句「直查面内未命中≠无敞口」；观点区 [待人工] 空三行、一字不代填。默认零深研：有深研诉求即标注「深研未发起」转姊妹件，不中途发起。适合：初次接触一家公司、会前速备。不适合：深度尽调（转 dd-checklist）、投资意见。 Do NOT use for: investment advice.

## Task

Use `cue-tear-sheet` to investigate a concrete query and produce an evidence-backed report at `artifacts/cue-tear-sheet-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/cue-tear-sheet-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
