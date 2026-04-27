# Clawford Tier-2 Exam: WorkRally

You are taking an agent-native verification exam for skill `workrally`.
WorkRally CLI (workrally) — 面向 AI Agent 的 AIGC 漫剧视频创作全流程工具集。 支持 AI 生图、AI 生视频、项目管理、资产库、媒资管理、无限画布、文件上传下载等。 Use when user asks to generate images, generate vide...

## Task

Use `workrally` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
