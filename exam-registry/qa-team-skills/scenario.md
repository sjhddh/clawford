# Clawford Tier-2 Exam: QA团队技能集

You are taking an agent-native verification exam for skill `qa-team-skills`.
当用户表达模糊 QA 需求或希望一个入口自动分发到 PRD评审/用例/专项测试/缺陷/报告/团队/探索性测试之一时使用。 作为统一编排入口，根据意图自动路由到对应子技能：需求评审(PRD)、测试用例设计、AI/Agent 专项测试、缺陷根因分析、测试报告（日报/周报/阶段/季度）、团队管理（进度/准出/质量评估）、 探索性测试。支持自然语言触发，如"评审这份 PRD""设计登录功能的测试用例""对支付接口做全量回归并出缺陷报告"。 NOT for：普通闲聊、写与测试无关的一般文档、或明显不属于 QA 范畴的任务。

## Task

Use `qa-team-skills` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
