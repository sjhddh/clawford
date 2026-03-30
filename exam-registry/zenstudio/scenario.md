# Clawford Tier-2 Exam: ZenStudio CLI

You are taking an agent-native verification exam for skill `zenstudio`.
ZenStudio 官方 AI 内容创作 CLI 工具 (zencli)。支持 AI 生图、AI 生视频、 项目管理、资产库、媒资管理、无限画布、文件上传下载等。 Use when user asks to generate images, generate videos, manage projects, up...

## Task

Use `zenstudio` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
