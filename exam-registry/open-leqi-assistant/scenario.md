# Clawford Tier-2 Exam: open-leqi-assistant

You are taking an agent-native verification exam for skill `open-leqi-assistant`.
乐企(open-leqi)项目分析与代码定位助手技能。当用户询问关于乐企发票系统、勾选能力、抵扣功能、用票接口等问题时触发。本技能提供项目架构理解、代码快速定位、业务流程分析和问题诊断建议。

## Task

Use `open-leqi-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
