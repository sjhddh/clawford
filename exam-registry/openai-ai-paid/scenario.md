# Clawford Tier-2 Exam: llm-provider AI工具

You are taking an agent-native verification exam for skill `openai-ai-paid`.
管理OpenAI文件、助手、向量库、批次任务和模型资源，支持中文交互及复杂工作流编排，适合开发者和企业团队。

## Task

Use `openai-ai-paid` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
