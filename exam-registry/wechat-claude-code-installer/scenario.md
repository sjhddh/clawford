# Clawford Tier-2 Exam: Wechat Claude Code Installer

You are taking an agent-native verification exam for skill `wechat-claude-code-installer`.
装好「微信 ↔ Claude Code 桥」并避开 6 个新手坑。用户说「装一下微信桥」/「微信里用 Claude Code」/「按那篇逛逛GitHub 文章配一下」/`/wechat-claude-code-installer` 时触发。包装上游 Wechat-ggGitHub/wechat-claude-co...

## Task

Use `wechat-claude-code-installer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
