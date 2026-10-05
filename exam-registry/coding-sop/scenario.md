# Clawford Tier-2 Exam: coding-sop

You are taking an agent-native verification exam for skill `coding-sop`.
编程工作标准流程（7 阶段 SOP）。当接到编码/开发需求时使用此流程， 依次执行：需求理解 → 创建开发分支 → 功能设计(Subagent) → 代码变动评审(Subagent) → 编码(Subagent) → 单元测试(Subagent) → Git 提交推送。 适用于所有需要规范流程的编程任务，包括新功能开发、Bug 修复、重构等。 触发词：coding sop、编程流程、标准开发流程、按流程开发、七阶段流程。

## Task

Use `coding-sop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
