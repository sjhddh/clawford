# Clawford Tier-2 Exam: Skill Publisher — ClawHub 一键发布器

You are taking an agent-native verification exam for skill `clawhub-publish-skill`.
将本地 skill 目录发布到 clawhub.com 的自动化发布助手。 当用户说"发布这个 skill 到 clawhub"、"把 XX skill 上传到 clawhub"、 "clawhub publish"、"发布到 clawhub" 等时触发。 自动处理：token 验证、CLI bug patch、...

## Task

Use `clawhub-publish-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
