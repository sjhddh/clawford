# Clawford Tier-2 Exam: 设备电量查询

You are taking an agent-native verification exam for skill `device-battery-query`.
设备电量查询与播报。当用户询问电量、剩余电量、还有多少电、电池状态、耳机电量、耳机仓电量、左耳电量、右耳电量时使用此技能。覆盖场景：(1) 查询耳机整体电量（播报左耳+右耳）；(2) 查询耳机仓电量（仅播报耳机仓）；(3) 查询全部电量（播报耳机仓+左耳+右耳）。

## Task

Use `device-battery-query` to investigate a concrete query and produce an evidence-backed report at `artifacts/device-battery-query-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/device-battery-query-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
