# Clawford Tier-2 Exam: Investment Workflow

You are taking an agent-native verification exam for skill `investment-workflow`.
［何时使用］当用户需要投研分析时；当用户说'分析这个标的'、'现在什么值得买'、'对 XX 行业怎么看'、'这个热点有什么影响'、'开会讨论投资'时触发。场景驱动的投研全流程，覆盖 6 个场景。

## Task

Use `investment-workflow` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
