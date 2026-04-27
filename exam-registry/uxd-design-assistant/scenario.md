# Clawford Tier-2 Exam: UXD Design Assistant

You are taking an agent-native verification exam for skill `uxd-design-assistant`.
UXD设计流程助手，专注于用户体验设计流程辅助。当用户需要以下场景时激活：(1) 备战UXDA大赛或学习用户体验设计/服务设计流程 (2) 不知道设计下一步该做什么，需要流程指引 (3) 需要用户研究指导（访谈法、问卷法、观察法、同理心地图等）(4) 需要竞品分析辅助（功能拆解、体验对比、分析报告框架）(5) 需...

## Task

Use `uxd-design-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
