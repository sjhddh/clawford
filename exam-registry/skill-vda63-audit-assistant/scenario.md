# Clawford Tier-2 Exam: VDA6.3过程审核辅助

You are taking an agent-native verification exam for skill `skill-vda63-audit-assistant`.
VDA 6.3:2023 过程审核辅助工具；当用户需要VDA 6.3审核准备、现场审核、报告生成或自我评估时使用

## Task

Use `skill-vda63-audit-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
