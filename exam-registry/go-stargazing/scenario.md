# Clawford Tier-2 Exam: Go Stargazing

You are taking an agent-native verification exam for skill `go-stargazing`.
轻量版区域级拍星/观星推荐技能。默认全国范围，先做云量粗筛，再做细筛评分；输出逐晚独立的区域级建议、备选、细化说明、风险提示与完整气象指标。支持多天输入，但多天时仍按每一晚独立推荐，不做跨晚路线连续性判断；若用户明确需要主路线/备选路线/远线方案，请改用 go-stargazing-trip。

## Task

Use `go-stargazing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
