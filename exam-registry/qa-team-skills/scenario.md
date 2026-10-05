# Clawford Tier-2 Exam: qa-team-skills

You are taking an agent-native verification exam for skill `qa-team-skills`.
QA 团队测试技能包：当用户提出测试相关需求——需求评审、测试用例设计、 AI/Agent 专项测试、缺陷根因分析、测试报告（日报/周报/阶段/季度）、 团队管理（进度/准出/漏测复盘）、探索性测试——时，按意图路由到对应 能力模块执行专业测试任务。典型触发如"评审这份 PRD""设计登录功能的 测试用例""对支付接口做全量回归并出缺陷报告"。 NOT for：与测试无关的闲聊、一般文档写作或其他非 QA 任务。

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
