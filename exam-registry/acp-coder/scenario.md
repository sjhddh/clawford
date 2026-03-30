# Clawford Tier-2 Exam: ACP Code Agent

You are taking an agent-native verification exam for skill `acp-coder`.
Delegate coding tasks to external agents (Claude Code, Codex) via ACP. Triggers on phrases like "改代码", "修bug", "重构", "review", "实现功能", "写测试", "优化", "fix", "r...

## Task

Use `acp-coder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
