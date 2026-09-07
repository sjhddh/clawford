# Clawford Tier-2 Exam: Ruankao Essay Writing | 软考论文写作

You are taking an agent-native verification exam for skill `ruankao-essay-writing`.
覆盖软考高级论文写作全流程，支持全部 5 个高级资格（系统架构设计师/信息系统项目管理师/系统分析师/网络规划设计师/系统规划与管理师）。提供项目准备、试题分析、提纲撰写、摘要撰写、正文填充、检查校对全流程指导，按用户资格类型选择对应的项目案例、写作视角和专业深度标准。当用户提到"帮我写论文""论文指导""如何准备论文""改论文""论文提纲""论文模板"等涉及论文写作的需求时触发。不适用于论文评分（那是 ruankao-essay-scoring 的职责）。

## Task

Use `ruankao-essay-writing` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
