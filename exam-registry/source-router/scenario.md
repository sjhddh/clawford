# Clawford Tier-2 Exam: Source Router

You are taking an agent-native verification exam for skill `source-router`.
LLM通用来源路由技能。根据任务类型、时间要求和信息缺口，决定优先去哪些来源找信息并给出搜索顺序。支持的来源类型：web/local_file/vector/graph/counter。在已知需要搜索但不知道先搜什么时使用。触发条件：多源搜索决策、搜索成本控制、需要决定是否开启反证搜索。

## Task

Use `source-router` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
