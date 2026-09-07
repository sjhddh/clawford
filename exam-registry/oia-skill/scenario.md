# Clawford Tier-2 Exam: oia-skill

You are taking an agent-native verification exam for skill `oia-skill`.
使用 oia 框架（npm 包 @oia-ai/oia-fresh）初始化全栈项目。当用户要求「创建 oia 项目」「初始化 oia / oia-fresh」「用 oia 框架搭一个应用」时触发。
译文：Init project with OIA (@oia-ai/oia-fresh). Trigger on "create OIA project", "init oia-fresh", "build with OIA". Includes env check, npx init, dev server & verify.

## Task

Use `oia-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
