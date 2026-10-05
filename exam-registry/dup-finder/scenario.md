# Clawford Tier-2 Exam: dup-finder

You are taking an agent-native verification exam for skill `dup-finder`.
重复文件查找器 — 三级哈希（大小→首块→全量SHA1）找重复文件，默认只报告 --apply 删多余保留首个（零依赖）

## Task

Use `dup-finder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
