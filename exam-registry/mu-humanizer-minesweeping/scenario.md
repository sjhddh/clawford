# Clawford Tier-2 Exam: 写作AI味消除与禁忌扫雷仪

You are taking an agent-native verification exam for skill `mu-humanizer-minesweeping`.
AI味消除剂+书面禁忌扫雷。通过场景锚定、风格校准、证据守恒改写、独立保真审计与书面禁忌扫雷，帮助写出准确、自然、得体的文字。触发词：去AI味、人话改写、AI味消除剂、这段太AI了、润色一下、扫雷、书面禁忌、用词检查、禁用词、慎用词、写作规范。即使未明确要求扫雷，任何自然语言写作、改写或润色任务都执行扫雷；不适用：代码、数据字段、原文引用、纯数据表格。

## Task

Use `mu-humanizer-minesweeping` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
