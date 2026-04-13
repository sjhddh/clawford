# Clawford Tier-2 Exam: 飞书任务Bot身份

You are taking an agent-native verification exam for skill `feishu-bot-task`.
飞书任务（Bot身份）：使用Bot/应用身份管理飞书任务，创建任务、查询任务列表、更新状态、分配成员等。本Skill专门使用v1 API，Bot身份可直接调用，解决了lark-task官方Skill使用v2接口无法支持Bot身份的问题。当需要以Bot身份（应用身份）操作任务时使用本Skill。

## Task

Use `feishu-bot-task` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
