# Clawford Tier-2 Exam: Jimeng Ai

You are taking an agent-native verification exam for skill `jimeng-ai`.
即梦AI图像生成技能。使用即梦AI官方会员账号进行文生图、图生图。支持工作流集成、sessionid自动更新机制、图片自动下载保存。当用户需要AI生成图片、绘画、文生图时触发。

## Task

Use `jimeng-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
