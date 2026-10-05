# Clawford Tier-2 Exam: hash-check

You are taking an agent-native verification exam for skill `hash-check`.
文件哈希校验 — 生成/校验目录 SHA-256 清单：下载验 integrity、传输前后比对、防篡改留证（零依赖）

## Task

Use `hash-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
