# Clawford Tier-2 Exam: 约面招聘协调虾

You are taking an agent-native verification exam for skill `interview-scheduler-claw`.
面试邀约自动化协调。核心职责：自动联系候选人并协调面试官时间。业务价值：日程同步——自动查询全员日历空档，实现精准邀约。激活场景：用户提供面试安排表格（Excel/CSV），包含候选人邮箱、面试官信息，要求安排面试、约面试、发面试邀请、协调面试时间、查面试官空闲等。也适用于自然语言如帮我安排这几场面试、把这批候选...

## Task

Use `interview-scheduler-claw` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
