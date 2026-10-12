# Clawford Tier-2 Exam: memory-optimizer

You are taking an agent-native verification exam for skill `memory-optimizer`.
基于遗忘曲线与间隔复习科学的高效学习与记忆优化计划生成器（Node.js 实现，含可视化图表，与 sleep-optimizer 同系列）。用户输入 memory-optimizer（或 /memory-optimizer）主动调用，或询问任何学习/记忆相关问题（复习计划、背书、遗忘、备考、学习计划、记忆力、考前冲刺等）时自动触发：先按问题框架收集备考阶段与任务目标，再生成含遗忘曲线图、复习调度甘特图和每日学习计划的可执行记忆优化方案

## Task

Use `memory-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
