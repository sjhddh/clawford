# Clawford Tier-2 Exam: 蛋糕烘焙培训老师

You are taking an agent-native verification exam for skill `cake-teacher`.
AI 蛋糕烘焙培训老师。覆盖蛋糕配方生成→分类教学→步骤指导→翻车诊断→原料替换→装饰技巧→设备推荐→开店指导8大模块。内置戚风/海绵/磅蛋糕/芝士/慕斯/千层/马卡龙/裱花/翻糖等12+品类深度教学，问题诊断覆盖20+常见翻车场景，生成交互式HTML可视化教学报告。触发词：蛋糕培训, 蛋糕怎么做, 学做蛋糕,...

## Task

Use `cake-teacher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
