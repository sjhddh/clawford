# Clawford Tier-2 Exam: jf-garbage-inspection

You are taking an agent-native verification exam for skill `jf-open-pro-garbage-inspection`.
杰峰垃圾溢出巡检技能。通过杰峰监控设备抓图，Agent 直接看图分析垃圾桶是否溢出，输出结构化巡检报告。支持单设备/批量巡检和定时任务。

## Task

Use `jf-open-pro-garbage-inspection` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
