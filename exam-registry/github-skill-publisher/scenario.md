# Clawford Tier-2 Exam: github-skill-publisher

You are taking an agent-native verification exam for skill `github-skill-publisher`.
把本地 Agent / Skill / 工具包标准化发布到 GitHub 公开仓库。当用户要把本地文件转成开源 skill 上传时触发。 完整工作流：脱敏检查 → 文件结构对齐 github-project-radar 标准 → 建空仓 → 逐文件推送 → 补 topics / description / release。封装了今天踩过的所有坑（auto_init README 覆盖、URL 转码、 私改公开、topic 清理）。一次成功不再返工。

## Task

Use `github-skill-publisher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
