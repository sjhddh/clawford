# Clawford Tier-2 Exam: 工作协同官方skill

You are taking an agent-native verification exam for skill `cms-cwork-workflow`.
提供【工作协同】全流程执行能力。用户一旦表达“写汇报/发汇报/发周报/提交汇报/查看收件箱/查待办/任务协作/业务单元”等执行意图，必须进入本 Skill 的脚本调用流程；仅当用户明确是纯咨询（如问规则、问怎么做）时，才允许先文字说明并二次确认是否执行。本 Skill 通过依赖 `cms-auth-skills`...

## Task

Use `cms-cwork-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
