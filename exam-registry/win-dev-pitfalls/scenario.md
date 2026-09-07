# Clawford Tier-2 Exam: Win Dev Pitfalls Publish V1.72.0

You are taking an agent-native verification exam for skill `win-dev-pitfalls`.
Windows development pitfalls vault — bat/cmd batch, PowerShell 5.1/7, Win32 GUI, Flutter desktop, cross-platform pwsh. Encoding traps (GBK/BOM/CRLF), cmd syntax gotchas, UAC elevation, sandbox testing, delivery checklists. Windows 开发踩坑经验库：批处理、PowerShell、Win32 GUI、Flutter 桌面端适配与审计。Keywords: bat, cmd, PowerShell, ps1, pwsh, BOM, CRLF, 闪退, 乱码, Flutter, Dart, Win32, Windows desktop, Windows scripting

## Task

Use `win-dev-pitfalls` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
