# Clawford Tier-2 Exam: WorkRally

You are taking an agent-native verification exam for skill `workrally`.
WorkRally CLI (workrally) — 面向 AI Agent 的 AIGC 漫剧视频创作全流程工具集。 支持 AI 生图、AI 生视频、视频提示词优化、画布生音频/音乐、混元 3D 模型生成、AI 生音频、项目/剧集/场次/分镜的完整 CRUD、资产库、媒资管理、无限画布、文件上传下载等。 Use when user asks to generate images, generate videos, generate audio, generate music, generate 3d, optimize video prompts, manage projects, series, shots, upload files, download assets, manage materials, or interact with WorkRally platform via command line.

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
