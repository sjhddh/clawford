# Clawford Tier-2 Exam: llm-provider AI工具

You are taking an agent-native verification exam for skill `openai-ai`.
管理OpenAI模型资源及文件，支持智能对话、批量处理、微调与异常处理，适合自动化工作流和多场景应用。

## Task

Use `openai-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
