# Clawford Tier-2 Exam: windows-shell

You are taking an agent-native verification exam for skill `windows-shell`.
Windows 命令行工作规范：先选对 shell（默认 Git Bash），再避开编码与 MSYS2 参数改写两类陷阱。覆盖 GBK/UTF-8、BOM、MSYS2 路径转换、PowerShell/pwsh、WSL 判定、Python/Node.js、Git 配置与代码生成规则。适用于 Windows 10/11 + MSYS2/Git Bash 环境下的所有命令行操作。细节按需读 references/。

## Task

Use `windows-shell` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
