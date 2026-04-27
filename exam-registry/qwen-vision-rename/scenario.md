# Clawford Tier-2 Exam: Qwen Vision Rename

You are taking an agent-native verification exam for skill `qwen-vision-rename`.
根据图片内容批量重命名本地图片文件。这是一个 skill，不是可调用工具；先用 read 打开本文件，再执行脚本命令，绝不能直接发出名为 qwen-vision-rename 的 tool call。用户提到“改名/重命名/按图片内容命名/整理图片文件名/整理图片”时必须使用本技能。默认直接执行改名，仅在用户明确...

## Task

Use `qwen-vision-rename` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
