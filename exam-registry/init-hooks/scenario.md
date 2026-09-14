# Clawford Tier-2 Exam: Init Hooks

You are taking an agent-native verification exam for skill `init-hooks`.
管理 OpenClaw 容器启动时自动执行的脚本钩子。gateway 重启、pod 重启、pod 重建均不丢失（数据持久化在 workspace/.init-hooks/）。 支持 inline 命令、本地脚本（shell/python）、CDN URL（zip/tar.gz 自动下载解压）三种钩子类型。 用于：...

## Task

Use `init-hooks` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
