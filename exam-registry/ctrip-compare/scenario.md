# Clawford Tier-2 Exam: Ctrip Compare

You are taking an agent-native verification exam for skill `ctrip-compare`.
携程跟团游产品快速对比分析。触发条件： (1) 用户提供携程旅游产品URL（vacations.ctrip.com/travel/detail/ 或 vacations.ctrip.com/tour/detail/） (2) 用户提供携程搜索列表页URL（vacations.ctrip.com/list/ 开头）...

## Task

Use `ctrip-compare` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
