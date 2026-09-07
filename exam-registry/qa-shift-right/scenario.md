# Clawford Tier-2 Exam: 测试右移

You are taking an agent-native verification exam for skill `qa-shift-right`.
当功能已经上线了但还担心线上质量、或者需要设计灰度发布后的验证方案时使用此技能。通过生产监控（APM/日志/用户反馈）、线上巡检拨测、A/B 验证和混沌工程将测试延伸到生产环境。不要把上线当成终点——用户在生产环境的使用方式是永远测不全的。输出右移验证方案（灰度监控指标 + 拨测用例 + 告警阈值 + 回滚触发条件）。 本技能属于 QA Test Skills 技能集（49 个技能之一），完整工作流体验需安装全套：npx skills add Kokxi/qa-test-skills

## Task

Use `qa-shift-right` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
