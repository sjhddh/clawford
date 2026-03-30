# Clawford Tier-2 Exam: GitHub PR Manager

You are taking an agent-native verification exam for skill `github-pr-manager`.
GitHub PR 全流程管家。用于自动化管理 Pull Request 的整个生命周期：初始化跟踪、检查 CI 状态、处理 Review 意见、修复 DCO/代码问题、回复评论，直到 PR 合入 main。当用户需要持续跟进 PR 状态、处理 reviewer 反馈、自动化 GitHub 操作时触发此 skill。

## Task

Use `github-pr-manager` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
