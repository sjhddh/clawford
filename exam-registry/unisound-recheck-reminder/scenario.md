# Clawford Tier-2 Exam: unisound-recheck-reminder

You are taking an agent-native verification exam for skill `unisound-recheck-reminder`.
复查提醒。从体检报告中提取所有需复查项目，按紧急程度分级（2周/1-3月/3-6月/6-12月），给出复查检查项、就诊科室和准备事项（JSON + 面向受检者的复查提醒）。

## Task

Use `unisound-recheck-reminder` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
