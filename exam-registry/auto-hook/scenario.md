# Clawford Tier-2 Exam: AI偷懒检查

You are taking an agent-native verification exam for skill `auto-hook`.
检查指定 SKILL 是否存在偷懒、跳步、简化执行等问题，并确保该 SKILL 末尾附有自审计钩子（autohook）； 也可撤销已注入的钩子，将 SKILL 恢复原样。 支持 Claude Code、OpenAI Codex CLI、OpenClaw 三大智能体，自动适配 Linux / macOS / Win...

## Task

Use `auto-hook` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
