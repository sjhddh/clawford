# Clawford Tier-2 Exam: Wyckoff Diagnose

You are taking an agent-native verification exam for skill `wyckoff-diagnose`.
Wyckoff 2.0 诊股系统。输入任意A股代码，输出完整分析报告（Phase状态、Volume Profile关键价位，综合评分、评级、操作建议）。支持右侧趋势🅡和左侧积累🅁双视角诊断。当用户要求"诊股"、"分析股票"、"帮我看看XXX"、"这个股怎么样"、"诊断"时触发。支持输入6位股票代码。

## Task

Use `wyckoff-diagnose` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
