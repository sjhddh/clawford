# Clawford Tier-2 Exam: Prompting Modes - 高级推理模式工具箱

You are taking an agent-native verification exam for skill `prompting-modes`.
高级推理模式工具箱。实现五种经过验证的提示词工程模式：Chain-of-Thought（逐步推理）、Self-Consistency（多采样投票）、Tree-of-Thought（多路径探索）、ReAct（工具调用循环）、Plan-and-Execute（先计划后执行）。当用户显式要求某种推理模式，或任务需要特定...

## Task

Use `prompting-modes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
