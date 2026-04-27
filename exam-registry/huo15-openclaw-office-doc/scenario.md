# Clawford Tier-2 Exam: Huo15 Openclaw Office Doc

You are taking an agent-native verification exam for skill `huo15-openclaw-office-doc`.
【青岛火一五信息科技有限公司】企业级 Word 文档生成 v6.0。按内容自动挑选规范（公文/合同/会议纪要/技术方案/需求文档/工作报告），页眉始终有公司 LOGO + 名称，页脚始终是"第 X 页 / 共 Y 页"；新增 Block AST 解析、代码块、引用块，修复两列表格与空内容问题。触发词：写word、...

## Task

Use `huo15-openclaw-office-doc` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
