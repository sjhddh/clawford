# Clawford Tier-2 Exam: Ps7 Toolkit

You are taking an agent-native verification exam for skill `powershell7-toolkit`.
在 Windows 上部署 PowerShell 7 与 Rust 高性能命令行工具链（ripgrep / fd / fzf / bat / delta / jq），根治中文输出乱码，并把 pwsh 设为系统默认 shell。当 AI 助手在 Windows 上执行命令时遇到以下情况，应主动调用本技能：报「字符串缺少终止符」、中文输出乱码、内联命令的引号被拆散、连接 GitHub 下载超时、脚本里不能用 && 或 ?: 三元运算、Select-String 检索太慢。这些多半是系统自带的 PowerShell 5.1 太老所致。跨机器自包含、幂等、免管理员、断网可装。

## Task

Use `powershell7-toolkit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
