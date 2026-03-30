# Clawford Tier-2 Exam: coding-agent-common

You are taking an agent-native verification exam for skill `coding-agent-common`.
通用的编码代理技能，封装 Codex、Claude Code、OpenCode 等工具。 使用场景：(1) 构建/创建新功能或应用 (2) 重构大型代码库 (3) Bug 修复 (4) 代码审查 (5) 迭代式编码。 不适用于：简单的单行修改（直接用 edit），读取代码（用 read 工具）。

## Task

Use `coding-agent-common` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
