# Clawford Tier-2 Exam: Deslop

You are taking an agent-native verification exam for skill `eh-deslop`.
当文章/文档/分享稿读起来像 AI 写的、充满套话、缺具体细节时使用。中英文反 AI 味两次 pass 重写。 不适用于代码注释和 commit message 的去 AI 味（用 slopbuster --mode code）。参见 doc-gen (用于生成文档)、human-writing (用于项目级中文...

## Task

Use `eh-deslop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
