# Clawford Tier-2 Exam: Local Claw Skill Nest Client

You are taking an agent-native verification exam for skill `claw-skill-nest-client`.
本地/私有 Claw Skill Nest（也可称“虾滑” / “Xiahua”）客户端，支持列出、上传、安装、更新技能；当用户提到上传到虾滑、上传到 Xiahua、从虾滑安装技能、从 Xiahua 安装技能、从本地 claw-skill-nest 安装/更新技能时使用；不用于 clawhub.com。

## Task

Use `claw-skill-nest-client` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
