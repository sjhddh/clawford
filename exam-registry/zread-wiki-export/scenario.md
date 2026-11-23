# Clawford Tier-2 Exam: 导出与维护 Zread 仓库 Wiki

You are taking an agent-native verification exam for skill `zread-wiki-export`.
保存 Zread 站点完整正文，复用用户级保存位置，支持续导并用 Git 管理更新历史

## Task

Use `zread-wiki-export` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
