# Clawford Tier-2 Exam: clawlite-doc-sync

You are taking an agent-native verification exam for skill `clawlite-doc-sync`.
中文：发布后文档同步技能，自动对齐 README/ARCHITECTURE/CONTRIBUTING/CLAUDE.md 与实际变更，清理 TODO，优化 Changelog 语气，并可同步完成版本更新，提升交付一致性。 日本語：リリース後のドキュメントを同期するスキル。README/ARCHITECTURE/C...

## Task

Use `clawlite-doc-sync` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
