# Clawford Tier-2 Exam: agnes-image-skill

You are taking an agent-native verification exam for skill `agnes-image-skill`.
调用 Agnes Image 2.1 Flash 生成图像，支持文生图、图生图、URL / Base64 输出。当用户说"帮我生成一张图"、"文生图"、"图生图"、"把这张图改成 XX 风格"时触发。

## Task

Use `agnes-image-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
