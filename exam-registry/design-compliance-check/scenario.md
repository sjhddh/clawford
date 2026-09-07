# Clawford Tier-2 Exam: 设计走查

You are taking an agent-native verification exam for skill `design-compliance-check`.
设计走查：将生成的 HTML/CSS 页面对照设计规范文档逐项审查，输出结构化合规报告。 当用户说"设计走查"、"走查页面"、"检查是否符合设计规范"、"审查设计合规"时触发。 生成任何 HTML/CSS 页面后也可主动触发，确保输出符合设计规范。 用户可指定任意设计规范文档路径，skill 会自动读取并逐项对照检查。

## Task

Use `design-compliance-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
