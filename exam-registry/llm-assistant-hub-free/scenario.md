# Clawford Tier-2 Exam: LLM助手中枢

You are taking an agent-native verification exam for skill `llm-assistant-hub-free`.
针对5000字以内长文档，提供分层分析和基础假设检测，提升推理质量，适用于合同审查、商业备忘录等场景。

## Task

Use `llm-assistant-hub-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
