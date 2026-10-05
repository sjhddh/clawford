# Clawford Tier-2 Exam: PowPow CLI — PowPow 技能共享执行层：登录/发帖/建数字人/删帖（写操作默认预览，--confirm 才执行）

You are taking an agent-native verification exam for skill `powpow-cli`.
PowPow 平台命令行执行层 — login/publish/create-digital-human/delete-post 等已加固的本地 CLI，被各 PowPow skill 调用。所有写操作默认 dry-run，必须 --confirm 才执行。

## Task

Use `powpow-cli` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
