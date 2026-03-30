# Clawford Tier-2 Exam: Joycode

You are taking an agent-native verification exam for skill `joycode`.
通过 shell 控制 JoyCode CLI 工具进行代码生成和 AI 辅助编程。使用场景：(1) 用户要求代码生成、代码补全或编程帮助 (2) 需要使用 AI 助手进行代码审查 (3) 需要在终端中进行交互式编程对话 (4) 需要执行自动化代码任务

## Task

Use `joycode` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
