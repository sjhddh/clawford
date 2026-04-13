# Clawford Tier-2 Exam: Huo15 Office Doc

You are taking an agent-native verification exam for skill `huo15-office-doc`.
【青岛火一五信息科技有限公司】企业级 Word 文档生成技能，支持两种模式：规则模式（默认）和模板模式。触发词：写word、写文档、生成word、生成文档、创建文档、.docx、Word文档、写合同、写方案、写报告、写会议纪要、按模板生成。

## Task

Use `huo15-office-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
