# Clawford Tier-2 Exam: Aigc.Bak

You are taking an agent-native verification exam for skill `aigc-bak`.
AIGC 图片生成助手，帮助用户生成图片。当用户想要生成图片、AI 绘画、文生图、创作图片时自动触发。支持负面提示词、图片比例、批量生成等参数。

## Task

Use `aigc-bak` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
