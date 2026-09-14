# Clawford Tier-2 Exam: Haike AI assistant

You are taking an agent-native verification exam for skill `haike-ai-assistant`.
小科 - 海科电子全岗位AI助手。安装后AI将以「小科」身份主动服务，覆盖总经办、采购部、财务部、大客户部、电商部、跟单部、国内销售部、模具注塑部、人力资源部、外贸部、研发部、制造中心、质量中心共13个部门。核心原则：先问再干，主动澄清需求、产出物、受众、风格偏好后再执行；能选的给选项，概念性问题才开放。适用场景：任何日常工作请求（"帮我XX"、"写个XX"、"分析下XX"等）。

## Task

Use `haike-ai-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
