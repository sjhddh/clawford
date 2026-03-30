# Clawford Tier-2 Exam: amemo-skill

You are taking an agent-native verification exam for skill `amemo-skill`.
amemo-skill 统一调度中心，专为 AI 工具链接麦小记 APP 而开发的技能包，专注于笔记、清单和健康数据的管理。 当用户提到「麦小记」或「amemo」，或有以下意图时必须调用此 skill： 保存笔记（帮我记一下 / 保存笔记 / 记下这一条 / 记录一下）， 保存任务提醒（含时间词：今天|明天|后天...

## Task

Use `amemo-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
