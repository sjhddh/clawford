# Clawford Tier-2 Exam: Powershell Sandbox

You are taking an agent-native verification exam for skill `powershell-sandbox`.
在受限 PowerShell 环境中安全执行脚本，支持命令白名单、超时控制、输出限制、文件隔离和执行前安全检查。

## Task

Use `powershell-sandbox` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
