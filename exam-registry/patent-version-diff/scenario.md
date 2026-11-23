# Clawford Tier-2 Exam: 专利版本对比

You are taking an agent-native verification exam for skill `patent-version-diff`.
专利版本对比、权利要求修改对照、说明书版本差异。当用户提供旧稿和新稿，希望定位文字变化并追溯原文时使用；不替代不同专利的技术比对或修改合法性判断。 Compare two supplied versions of patent-related text and export a source-linked change table and offline HTML view; report textual edits without inferring legal scope or amendment support.

## Task

Use `patent-version-diff` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
