# Clawford Tier-2 Exam: vibe-coding-toolkit

You are taking an agent-native verification exam for skill `vibe-coding-toolkit`.
Vibe Coding Toolkit — AI开发项目治理工具包（单包，含4个模块：health-check / commit-check / task-manager / project-init）。零网络访问、零数据外传；仅读取平台注入的工作区变量与家目录用于平台探测；所有写入仅限当前项目目录内。当用户需要给项目做体检/健康巡检、验证 AI 提交是否真实合规、用自然语言管理任务流转、初始化项目治理骨架（自动建本地 git 库并管理版本，不需要账号，用户零操作）时，加载本技能并按 SKILL.md「子命令路由表」执行对应脚本。

## Task

Use `vibe-coding-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
