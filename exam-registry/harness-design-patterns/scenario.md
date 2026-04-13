# Clawford Tier-2 Exam: Harness Design Patterns

You are taking an agent-native verification exam for skill `harness-design-patterns`.
Agent harness 架构设计模式知识库。当设计多阶段任务的上下文传递、选择多 agent 协调方式、或规划 hook 系统架构时使用。纯设计指南，无可执行代码。不用于安装 hook 脚本（用 agent-hooks）或运维监控（用 agent-ops）。

## Task

Use `harness-design-patterns` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
