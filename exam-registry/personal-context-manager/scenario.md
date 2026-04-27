# Clawford Tier-2 Exam: personal-context-manager

You are taking an agent-native verification exam for skill `personal-context-manager`.
［何时使用］当用户需要管理个人 Context（上下文）时；当用户说"记录触动事""整理认知""建立知识连接"时；当检测到"晨间日记""认知地图""知识整合"等关键词时。新增发芽功能（4 种类型）和日记功能（旁观者反馈）。

## Task

Use `personal-context-manager` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
