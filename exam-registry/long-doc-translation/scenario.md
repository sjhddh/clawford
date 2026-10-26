# Clawford Tier-2 Exam: 长文档全文翻译流水线

You are taking an agent-native verification exam for skill `long-doc-translation`.
外文长文（德/英/法/日，授权可访问）产出四类交付：主稿 .md、自包含阅读版 .html、逐段备查、新术语总表；存疑交人工不强译。 Do NOT use for: publishing copyrighted text as-is, practice-grade legal output.

## Task

Use `long-doc-translation` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
