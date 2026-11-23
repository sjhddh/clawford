# Clawford Tier-2 Exam: init-hooks

You are taking an agent-native verification exam for skill `init-hooks`.
管理 OpenClaw 容器启动时自动执行的脚本钩子。gateway 重启、pod 重启、pod 重建均不丢失（数据持久化在 workspace/.init-hooks/）。 支持 inline 命令、本地脚本（shell/python）、CDN URL（zip/tar.gz 自动下载解压）三种钩子类型。 用于：新增/查看/修改/禁用/删除启动钩子、立即测试运行、查看执行日志。 触发词：init-hooks、启动钩子、startup hook、重启初始化、pod重启执行、开机自启。 安装触发词：帮我安装 init-hooks、初始化 init-hooks、设置 init-hooks、执行 init-hooks 安装。 配置变更触发词：修改 openclaw.json、改 gateway 配置、改配置文件 → 执行后自动调用 sync_openclaw_config.py。 能力边界：不主动修改任何配置项，不预设默认值；只把用户明确给出的 patch 原样写入，并把配置复制到用户配置的持久化路径。

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
