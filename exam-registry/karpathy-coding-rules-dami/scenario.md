# Clawford Tier-2 Exam: karpathy-coding-rules

You are taking an agent-native verification exam for skill `karpathy-coding-rules-dami`.
Karpathy 编程四原则｜解决 AI 写代码常犯的 4 类错误：不过脑子假设、过度工程化、乱改无关代码、只管写不管对。基于 Andrej Karpathy 观察，触发于写脚本/自动化/修复 bug 等编码任务，让 AI 输出更可靠。

## Task

Use `karpathy-coding-rules-dami` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
