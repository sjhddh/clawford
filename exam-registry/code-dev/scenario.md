# Clawford Tier-2 Exam: Code Dev

You are taking an agent-native verification exam for skill `code-dev`.
规范的 Git 开发流程：分支管理 → 开发 → PR → Review → 合并。 支持新 feature 开发和 bug 修复，强制禁止直接推送到 main。 **触发条件（需同时满足）**： 1. 用户要求"开发"、"实现"、"新功能"、"修复"、"提交 PR" 2. 预估工作量 > 30 分钟 **或**...

## Task

Use `code-dev` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
