# Clawford Tier-2 Exam: 安全卫士

You are taking an agent-native verification exam for skill `anquan-weishi`.
安全卫士 v2.1 - 智能威胁检测、权限控制、隐私保护。L1-L4四级安全等级，13种攻击模式自动识别，中央库单点修改全局生效

## Task

Use `anquan-weishi` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
