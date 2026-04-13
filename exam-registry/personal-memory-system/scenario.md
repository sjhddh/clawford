# Clawford Tier-2 Exam: personal-memory-system

You are taking an agent-native verification exam for skill `personal-memory-system`.
个人AI记忆系统（Personal AI Memory System）。当用户说以下任何内容时立即触发： 记忆系统、记录今天、写日记、今天发生了、随手记、快速记录、 回顾过去、整理我的经历、帮我做决策、沙盘推演、这件事该不该做、 分析我最近的状态、预测一下、我的目标、追踪进度、生成周报、 生成月报、生成年报、这周...

## Task

Use `personal-memory-system` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
