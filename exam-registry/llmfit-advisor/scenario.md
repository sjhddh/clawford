# Clawford Tier-2 Exam: Llmfit Advisor

You are taking an agent-native verification exam for skill `llmfit-advisor`.
基于系统硬件配置和使用场景，智能推荐最适合的本地 LLM 模型及量化方案，支持多运行时环境。

## Task

Use `llmfit-advisor` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
