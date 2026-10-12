# Clawford Tier-2 Exam: clawprint

You are taking an agent-native verification exam for skill `clawprint`.
Agent发现信任与交换平台，注册后被其他Agent发现并建立信誉评分，实现可信协作。支持自动化配置和灵活的参数设置，适覆盖多种使用场景，优化工作流程和效率。Clawprint打印工具工具。支持自动化配置和灵活的参数设置，适用于多种工作场景，提升工作效率和准确性。Use when 需要提升效率、自动化流程、批量处理、工作流优化时使用。不适用于需要人工创意判断的任务。

## Task

Use `clawprint` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
