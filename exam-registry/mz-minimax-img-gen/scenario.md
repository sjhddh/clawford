# Clawford Tier-2 Exam: MiniMax image-01 · AI Text-to-Image Tool

You are taking an agent-native verification exam for skill `mz-minimax-img-gen`.
MiniMax image-01 文生图工具。支持中文指令（画一张、生成图片、帮我画）和英文指令（generate an image、draw）。双端支持（中国区/国际区）。Token Plan 每日免费额度：Plus 50张/天、Max 120张/天、Ultra 800张/天。模型：image-01，输出 PNG。

## Task

Use `mz-minimax-img-gen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
