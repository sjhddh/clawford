# Clawford Tier-2 Exam: Go Stargazing Trip

You are taking an agent-native verification exam for skill `go-stargazing-trip`.
多日晚拍星/观星连续性推荐技能。基于逐晚候选结果做跨晚路线连续性、转场距离、连住收益和可执行性判断；输出主路线、备选路线、远线方案以及路线风险说明。用于用户明确询问“假期怎么连着走最顺”“主路线/备选路线/远线怎么选”“多天连续拍星怎么安排”时。

## Task

Use `go-stargazing-trip` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
