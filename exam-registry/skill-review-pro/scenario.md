# Clawford Tier-2 Exam: skill-review-pro

You are taking an agent-native verification exam for skill `skill-review-pro`.
AI Skill 质量评审系统。通过静态审查对 Skill 进行评分（100分制）， 输出专业的评审报告和改进建议。模块化架构：主控编排 + 类型策略 + 评分模型 + 修复执行。 AI Skill QA System. Evaluates Skills via static analysis, with 100-point scoring, modular architecture with type-aware policies. 触发词：评审 skill, 测评 skill, skill 评分, skill 质量检查, 审查 skill, 改进 skill, 完善技能, 验证修复意见, 稳定性测试, 全库体检, skill benchmark, 发布核验, 发布确认, review skill, evaluate skill, improve skill, validate fix, skill quality, repo audit, publish check, verify publish.

## Task

Use `skill-review-pro` to investigate a concrete query and produce an evidence-backed report at `artifacts/skill-review-pro-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/skill-review-pro-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
