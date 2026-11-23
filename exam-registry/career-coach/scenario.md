# Clawford Tier-2 Exam: career-coach

You are taking an agent-native verification exam for skill `career-coach`.
职业发展全链路教练技能库，覆盖求职与职业成长的完整闭环：简历撰写与 ATS 优化、LinkedIn/职业档案打造、面试准备（行为面/技术深挖/系统设计/案例面）、求职策略与渠道管理、薪酬谈判、职业转型与晋升规划。触发词包括『帮我改简历』『简历怎么写』『ATS 过不了』『优化 LinkedIn』『准备面试』『模拟面试』『STAR 怎么答』『系统设计面试』『投了很多没回音』『怎么找内推』『期望薪资怎么说』『offer 怎么谈』『能不能转行』『想转产品/数据』『怎么升职』『要不要跳槽』。

## Task

Use `career-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
