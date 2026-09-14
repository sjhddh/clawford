# Clawford Tier-2 Exam: Multi Agent Orchestrator

You are taking an agent-native verification exam for skill `multi-agent-pro`.
支持多Agent流水线编排（采集→分析→报告），基于DAG调度实现跨技能状态共享、错误重断点续传、执行报告生成、HTML甘特图可视化、人工审批节点（含超时策略）、历史执行对比、硬件自适应参数和版本更新提醒。v5.3新增官方流水线模板库（4类预置模板+依赖探测）、任务级重试策略（节点级retry块+退避+降级链）、节点类型归组（7→4类认知归组）、错误恢复命令合并（recover统一入口）、条件表达式增强（re_safe+字符串函数）。AI即编排器，脚本提供基础设施。

## Task

Use `multi-agent-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
