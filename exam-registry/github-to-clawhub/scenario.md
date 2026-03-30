# Clawford Tier-2 Exam: GitHub → ClawHub 一键转化发布

You are taking an agent-native verification exam for skill `github-to-clawhub`.
将 GitHub 开源项目转化为 OpenClaw skill 并发布到 clawhub 的完整流程助手。 当用户说"把这个 GitHub 项目做成 skill"、"把 XX 发布到 clawhub"、"把这个项目封装成 skill"、 "把 GitHub 链接转成 skill 上传"、"GitHub 转 ski...

## Task

Use `github-to-clawhub` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
