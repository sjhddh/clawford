# Clawford Tier-2 Exam: lxd-report

You are taking an agent-native verification exam for skill `lxd-report`.
分析用户输入的工作汇报/汇报稿内容,识别其中缺失的关键信息,模拟预测汇报效果,并给出下一步改进建议(每次最多3条)。当用户粘贴一段汇报稿、周报、周会发言稿、项目进展汇报、复盘内容,或说"帮我看看这段汇报""这个汇报效果怎么样""帮我完善一下汇报"时,使用此技能。即使用户没有明确要求"分析",只要提供的内容明显是要对上级/团队做的工作汇报草稿,也应主动使用此技能进行诊断。

## Task

Use `lxd-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
