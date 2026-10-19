# Clawford Tier-2 Exam: 360disk-cli

You are taking an agent-native verification exam for skill `360disk-cli`.
360 AI 云盘命令行工具。通过 Shell 命令直接操作云盘：浏览目录、搜索文件、上传下载、移动重命名、删除、分享、保存 URL/文本到云盘、追加文件内容、检测重名文件、配置文件读写、查看用户信息。输出结构化 JSON，支持 jq 管道处理和批量操作。当用户需要管理云盘文件、在脚本/CI 中操作云盘、或将云盘...

## Task

Use `360disk-cli` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
