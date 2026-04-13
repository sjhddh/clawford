# Clawford Tier-2 Exam: Llm Memory Integration

You are taking an agent-native verification exam for skill `llm-memory-integration`.
LLM + 向量模型集成方案。支持任意 LLM + Embedding 模型，用户自行配置。支持混合检索、智能路由、渐进式启用、用户画像自动更新。

## Task

Use `llm-memory-integration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
