# Clawford Tier-2 Exam: Windows CWD Launch Fix

You are taking an agent-native verification exam for skill `windows-app-cwd-launch-fix`.
Diagnose and fix Windows packaged apps that crash on launch because relative resource paths (res/xxx) resolve against the process working directory. Includes a four-step elimination method (line endings / start inheritance / file truly missing / CWD attribution), an A/B reproduction, and a self-checking hardened launcher template. Use for 'app crashes on double-click', 'PyInstaller exe crash', 'FileNotFoundError res path', 'CWD wrong', 'works in one folder but not another', '打包给客户跑不起来'.

## Task

Use `windows-app-cwd-launch-fix` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
