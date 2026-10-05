# Clawford Tier-2 Exam: Auto Coding V3

You are taking an agent-native verification exam for skill `auto-coding-skill`.
智能自主编码系统 v3.7.17-compliance — 全子代理架构 + 分阶段技能注入。支持 8 步循环、Reviewer 否决权、复杂度自动分级、Risk Scorecard 量化检测。触发词: auto-coding, Auto coding, 启动自动编码

## Task

Use `auto-coding-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
