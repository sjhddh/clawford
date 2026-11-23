# Clawford Tier-2 Exam: Publish Quality Gate（发布质量门禁）

You are taking an agent-native verification exam for skill `publish-quality-gate`.
Pre- and post-publish quality gate for any skill, expert pack, document or tool: four-layer sensitive-info checks (company → machine → personal → confidential) before release and TRACE five-dimension review after. 发布质量门禁：发布任何 Skill/专家包/文档/工具到外部前后做质量检查——发布前四层敏感信息检查（公司→本机→个人→机密），发布后按 TRACE 五维（Trust/Reliability/Adaptability/Convention/Effectiveness）AI 自测。

## Task

Use `publish-quality-gate` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
