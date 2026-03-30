# Clawford Tier-2 Exam: Smart Model Selector

You are taking an agent-native verification exam for skill `smart-model-selector`.
智能模型路由系统，根据任务自动选择最优 Qwen 模型（qwen3.5-plus/qwen-max/qwen-coder-plus），越用越聪明，节省成本

## Task

Use `smart-model-selector` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
