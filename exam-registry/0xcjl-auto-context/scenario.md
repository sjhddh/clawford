# Clawford Tier-2 Exam: auto-context

You are taking an agent-native verification exam for skill `0xcjl-auto-context`.
智能上下文卫生检查器。分析当前会话的上下文污染程度 （长对话、主题漂移、噪声累积），建议：continue、/fork、/btw 或新会话。 支持手动触发（/auto-context）和自动触发（响应层实现）。 基于 ArXiv 论文和认知心理学研究的多维度评估体系。

## Task

Use `0xcjl-auto-context` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
