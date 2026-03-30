# Clawford Tier-2 Exam: Lingxi

You are taking an agent-native verification exam for skill `lingxi-ai`.
灵犀 v3.3.6 - 智慧调度系统。心有灵犀，一点就通。智能理解用户意图，自动调度模型/技能/工具，编排多步骤任务，汇总结果反馈。支持多Agent协作架构。

## Task

Use `lingxi-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
