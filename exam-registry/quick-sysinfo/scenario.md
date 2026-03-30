# Clawford Tier-2 Exam: 快速信息查询

You are taking an agent-native verification exam for skill `quick-sysinfo`.
快速查询本机系统信息和OpenClaw配置。包括CPU、内存、磁盘、网络、环境配置、硬件资源占用、Docker容器、OpenClaw配置/频道/插件/服务状态。当用户询问"系统状态"、"CPU使用率"、"内存占用"、"磁盘空间"、"网络信息"、"硬件配置"、"进程状态"、"Docker状态"、"系统负载"、"配置...

## Task

Use `quick-sysinfo` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
