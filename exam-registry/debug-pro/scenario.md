# Clawford Tier-2 Exam: debug-pro

You are taking an agent-native verification exam for skill `debug-pro`.
提供 7 步标准调试协议 + 多语言调试命令，系统性识别、验证、修复软件缺陷，用于回答「代码报错怎么查」「这个 bug 到底在哪」「改了还是不对怎么办」这类问题

## Task

Use `debug-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
