# Clawford Tier-2 Exam: weekly-report-framework

You are taking an agent-native verification exam for skill `weekly-report-framework`.
智能装备研究所项目周报管理框架V2.5。用于研究室经理生成周报给所长汇报。触发条件：提到"周报"、"生成周报"、"导出周报"、"项目周报"、"研究室周报"。支持三种初始化方式（md模板/对话式/Excel模板）。包含11阶段生命周期、双表格簿结构、12列字段定义、群聊抓取、增量迭代、异常检测（V2.5新增）、学习迭代。

## Task

Use `weekly-report-framework` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
