# Clawford Tier-2 Exam: Prompt-Router

You are taking an agent-native verification exam for skill `prompt-router`.
基于文本匹配的快速路由引擎，为简单任务提供零 LLM 决策的快速路径。支持中英文混合输入，自动匹配技能/工具，低置信度时降级到 LLM 语义路由。

## Task

Use `prompt-router` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
