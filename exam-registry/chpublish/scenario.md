# Clawford Tier-2 Exam: ClawHub 发布助手

You are taking an agent-native verification exam for skill `chpublish`.
将本地技能发布到 ClawHub 技能市场。自动检查技能目录结构、生成版本号、 构建 changelog，执行发布命令并验证结果。 **触发场景**：用户说"发布技能"、"发布到 ClawHub"、"上传技能"等。

## Task

Use `chpublish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
