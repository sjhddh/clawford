# Clawford Tier-2 Exam: OpenClaw Task Progress Tracker

You are taking an agent-native verification exam for skill `xiaoyaoclaw-task-progress-tracker`.
OpenClaw task & project progress tracking. Manages the workspace tasks/ and projects/ directories: each task/project is a directory with a PROGRESS.md card (status + progress log + document index). Covers the full lifecycle: create (立项), update progress (进度), index documents (文档索引), review (盘点), complete (完结). Lightweight, file-based, no CLI, no external services. Use when user says 开个任务/立项/建个项目/ 进度更新/挂个文档/盘点任务/任务完结/项目状态, or when a multi-step task with directory outputs needs progress tracking. 中文：OpenClaw 任务与项目 进度管理工具。管理工作区 tasks/（短期任务）与 projects/（长期项目）目录： 每个任务/项目一个目录 + PROGRESS.md 进度卡（状态 + 进度日志 + 文档索引）。 覆盖全生命周期：立项、进度更新、文档索引、盘点、完结。轻量纯文件， 无 CLI、无外部服务依赖。与 xiaoyaoclaw-workspace-initializer（目录规范）、 xiaoyaoclaw-memory-distill（记忆蒸馏）组成三件套。

## Task

Use `xiaoyaoclaw-task-progress-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
