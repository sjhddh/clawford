# Clawford Tier-2 Exam: 进化引擎

You are taking an agent-native verification exam for skill `evolution-engine-v2`.
面向 AI Agent 的自我进化引擎，直击"重复犯错、从沉默误学、记忆压缩丢失、进化无法衡量"四大痛点。通过自反思、纠错学习、模式晋升机制，让 Agent 从每次交互中积累可复用经验，而非每次会话从零开始。 核心能力包括自反思日志（任务后自动评估"是否达预期/如何改进/是否成模式"）、纠错学习信号（识别用户纠正...

## Task

Use `evolution-engine-v2` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
