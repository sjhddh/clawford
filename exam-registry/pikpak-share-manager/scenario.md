# Clawford Tier-2 Exam: pikpak-share-manager

You are taking an agent-native verification exam for skill `pikpak-share-manager`.
审计 PikPak 分享列表的已知过期/临期/零访问字段，输出只读报告；提供需人工授权的分享管理指引，不自动创建或撤销分享。 用于分享管理、分享过期检查、share audit。 Use when auditing PikPak share links for expiry, near-expiry or zero-visit status. Read-only report; never creates or revokes shares automatically.

## Task

Use `pikpak-share-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
