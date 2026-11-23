# Clawford Tier-2 Exam: 开发环境体检器（env-doctor）

You are taking an agent-native verification exam for skill `hekouwang-env-doctor-skill`.
开发环境与磁盘体检：默认只读扫描（不读用户文档内容、不联网、不上报），按数据/缓存/残留三分法给出判定与官方清理建议。clean 子命令只跑各工具官方的缓存与旧版本清理命令（npm、yarn、pnpm、brew、pip、uv），逐项确认后执行；不删除版本管理器目录、不删模型权重与容器数据；被判为残留的版本管理器只在报告里给手动卸载步骤。附 scripts/run-all-doctors.sh：会调用 claude-md-doctor 与 skill-doctor，额外报告配置与技能分数，属附加能力。

## Task

Use `hekouwang-env-doctor-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
