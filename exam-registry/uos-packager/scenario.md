# Clawford Tier-2 Exam: Uos Packager

You are taking an agent-native verification exam for skill `uos-packager`.
基于统信规范，使用 deb 格式将应用文件打包到 /opt/apps/${appid}/，并生成符合要求的 info、desktop 和图标文件。

## Task

Use `uos-packager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
