# Clawford Tier-2 Exam: gts-operator / OA通用流程管理

You are taking an agent-native verification exam for skill `gts-operator`.
GTS 多租户配置平台（表单+审批流）的 AI 原生操作员 skill。让 AI Agent 以纯对话方式完成系统的全部管理操作——注册租户/管理员、维护组织架构与人员、配置表单与工作流（含字段类型/条件分支/审批人规则/子表明细/节点级字段权限/超时自动处理）、配置审批代理人（外出行程内自动改派审批任务）、发起业务单据、执行审批（同意/驳回/转办/加急）、查询与导出，以及表单复用与模板共享（同租户复制、导出/导入模板包、发布到模板市场、浏览与一键安装、下架）。本 skill 采用「动态发现」模式：Agent 先调用系统自带的 /discovery/routes 与 /discovery/co

## Task

Use `gts-operator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
