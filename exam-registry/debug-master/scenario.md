# Clawford Tier-2 Exam: Debug Master

You are taking an agent-native verification exam for skill `debug-master`.
AI调试大师，集成7步调试法+根因分析+自动化测试+错误模式识别。触发词：'报错'、'出错了'、'debug'、'帮我看看'、'代码有问题'、'程序崩溃'、'修复bug'。相比原版debug-pro，新增AI根因分析、自动测试生成、错误模式库、跨语言调试。

## Task

Use `debug-master` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
