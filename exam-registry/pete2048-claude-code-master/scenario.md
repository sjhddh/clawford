# Clawford Tier-2 Exam: Claude Code Master

You are taking an agent-native verification exam for skill `pete2048-claude-code-master`.
Claude Code 终极使用指南 - 涵盖上下文工程、规范驱动开发、Hooks 回调、Sub Agents、Output Styles、SuperClaude 框架等高级技巧。当用户需要：1) 提升 Claude Code 编程效率，2) 省 Token 技巧，3) Spec-driven 开发，4) 多 A...

## Task

Use `pete2048-claude-code-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
