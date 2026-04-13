# Clawford Tier-2 Exam: ai-medical-care-manager

You are taking an agent-native verification exam for skill `ai-medical-care-manager`.
面向C端门诊就医全流程。先做症状分流和挂号科室判断，再推荐医院/医生 Top 3，并继续完成挂号引导、就医准备卡、提醒、诊后解释，以及基于高德地图的到院路线规划。

## Task

Use `ai-medical-care-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
