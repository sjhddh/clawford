# Clawford Tier-2 Exam: 智图云仓 Token 路由

You are taking an agent-native verification exam for skill `cmz-token-optimizer`.
智能模型路由 - 根据任务是否需要工具调用自动选择模型。需要工具(搜索/浏览器/文件/天气/股票等)使用百炼付费模型，纯聊天使用OpenRouter免费模型。V3.1.0新增route_by_tool_required()函数。

## Task

Use `cmz-token-optimizer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
