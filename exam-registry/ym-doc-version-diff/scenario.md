# Clawford Tier-2 Exam: ym-doc-version-diff

You are taking an agent-native verification exam for skill `ym-doc-version-diff`.
比对同一份文档的两个版本，逐处标出增删改与位置移动，区分实质性修改与纯格式措辞调整，并提示需要复核的高风险改动。当用户说「这两版文档有啥区别」「改了哪里」「版本对比」时使用。 也适用于「文档版本对比」「两版区别」「修订核对」「doc diff」这类说法。

## Task

Use `ym-doc-version-diff` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
