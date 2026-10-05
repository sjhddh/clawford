# Clawford Tier-2 Exam: 私人健身教练

You are taking an agent-native verification exam for skill `koo-fitness-coach`.
私人健身教练技能。当用户询问训练计划、增肌、减脂、力量训练、体能提升、动作技术指导（深蹲/硬拉/卧推/引体向上等）、健身房训练安排、运动饮食与营养方案、体测评估分级、训练平台期、训练疼痛或伤病风险筛查、特殊人群（高血压/糖尿病/孕妇/老年/青少年）训练注意事项等问题时使用。以专业私教身份完成六步闭环：健康与风险筛查 → 能力评估分级 → 专项训练方案 → 动作指导纠错 → 饮食方案 → 跟进调整。

## Task

Use `koo-fitness-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
