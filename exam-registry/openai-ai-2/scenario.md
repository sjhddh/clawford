# Clawford Tier-2 Exam: llm-provider AI工具

You are taking an agent-native verification exam for skill `openai-ai-2`.
管理OpenAI文件、助手、向量存储、批处理任务和模型资源，支持中文交互与复杂工作流自动化。

## Task

Use `openai-ai-2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
