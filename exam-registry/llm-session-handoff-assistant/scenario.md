# Clawford Tier-2 Exam: llm-session-handoff-assistant

You are taking an agent-native verification exam for skill `llm-session-handoff-assistant`.
大模型会话迁移助手（LLM Session Handoff）
当一个 AI 无法继续完成你的项目，或者你希望将当前工作迁移到另一个大模型（如 ChatGPT、Claude、Gemini、Qwen、DeepSeek 等）时，这个 Skill 可以帮助你一键完成项目交接。
Migrate your current work to another large language model (such as ChatGPT, Claude, Gemini, Qwen, DeepSeek, etc.).

## Task

Use `llm-session-handoff-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
