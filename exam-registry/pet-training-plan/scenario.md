# Clawford Tier-2 Exam: 宠物行为训练方案台

You are taking an agent-native verification exam for skill `pet-training-plan`.
行为问题讲道理没用，需要把目标拆成每周能练的小步骤，并且全家人执行一致。 输入：宠物种类与年龄、具体行为问题与发生场景、触发条件、家庭成员配合情况、每天可训练时间。输出：①行为原因分析（需求未被满足/焦虑/强化错位）②分周训练计划（目标→步骤→每天 5-10 分钟怎么做）③奖励与忽略的执行规则（全家统一口径）④环境调整建议 ⑤进度记录表 ⑥需要专业行为矫正师的信号。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `pet-training-plan` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
