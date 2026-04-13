# Clawford Tier-2 Exam: Improvement Discriminator

You are taking an agent-native verification exam for skill `improvement-discriminator`.
当需要对改进候选多人盲审打分、用 LLM 做语义评估、判断候选是否应被接受、或打分结果全是 hold 想知道为什么时使用。支持 --panel 多审阅者盲审和 --llm-judge 语义评估。不用于结构评估（用 improvement-learner）或门禁决策（用 improvement-gate）。

## Task

Use `improvement-discriminator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
