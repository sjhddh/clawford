# Clawford Tier-2 Exam: powershell

You are taking an agent-native verification exam for skill `powershell`.
Prevent file-writing via Windows PowerShell to avoid GBK encoding corruption. Use when Kimi Code CLI is running on Windows and the task involves creating, writing, or modifying text files, especially when content contains Chinese or other non-ASCII characters.

## Task

Use `powershell` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
