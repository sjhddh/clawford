# Clawford Tier-2 Exam: publish-quality-gate

You are taking an agent-native verification exam for skill `publish-quality-gate`.
发布质量门禁：发布任何 Skill/专家包/文档/工具到外部（分享、上架市场、对外发布）前后的质量检查。发布前执行四层敏感信息检查（公司信息→本机信息→个人信息→机密信息），发布后按 TRACE 五维（Trust/Reliability/Adaptability/Convention/Effectiveness）执行 AI 自测。当用户说'准备发布'、'发布前检查'、'发布后自测'、'TRACE 评测'、'检查一下发布物'、'脱敏检查'、'发布质量'时使用。

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
