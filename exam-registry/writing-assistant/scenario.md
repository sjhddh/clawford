# Clawford Tier-2 Exam: writing-assistant

You are taking an agent-native verification exam for skill `writing-assistant`.
写作团队Lead管理专业写手,分析写作任务并分发,通过协议工具协调多人创作。提供专业的能力支持,适用于多种工作场景。开箱即用,无需复杂配置,支持中文交互与结构化输出。提供专业能力支持,覆盖多场景工作流,支持自动化处理。

## Task

Use `writing-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
