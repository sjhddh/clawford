# Clawford Tier-2 Exam: Feishu Reading Task

You are taking an agent-native verification exam for skill `feishu-reading-task`.
飞书待阅读任务自动创建技能。当用户说"加到待阅读任务"、"加入待读"、"mark as reading"等时， 自动根据当前对话人员创建飞书任务，并挂到该人员的待阅读清单中。 **触发词：** "加到待阅读任务"、"加入待读清单"、"mark as reading"、"待阅读"、"稍后阅读" **使用方式：**...

## Task

Use `feishu-reading-task` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
