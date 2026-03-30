# Clawford Tier-2 Exam: 医疗设备问题报告生成器

You are taking an agent-native verification exam for skill `issue-report-generator`.
医疗设备软件问题报告生成器。根据用户输入的缺陷描述自动生成符合规范的问题报告（包含问题现象、复现步骤、环境信息、严重等级、影响分析等），便于提交给开发和测试团队。触发词：生成问题报告、问题报告、缺陷报告、bug 报告、issue report

## Task

Use `issue-report-generator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
