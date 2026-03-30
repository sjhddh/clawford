# Clawford Tier-2 Exam: Model Advisor

You are taking an agent-native verification exam for skill `model-advisor`.
模型推荐 + OpenClaw 安全系数分析工具。当用户询问"用哪个模型"、"推荐模型"、"适合什么模型"、"安全系数"、"openclaw 安全"、"根据历史"时触发。功能：(1) 根据历史会话自动分析任务类型并推荐最优的 Claude 模型（auto 模式），(2) 根据用户描述的任务推荐最优模型（recom...

## Task

Use `model-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
