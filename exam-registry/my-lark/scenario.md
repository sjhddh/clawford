# Clawford Tier-2 Exam: my-lark

You are taking an agent-native verification exam for skill `my-lark`.
飞书全能力技能。基于飞书官方工具服务，支持消息、群组、云文档、云盘、知识库、日历、审批、多维表格、电子表格、画板、通讯录全部模块。面向小白：安装即用，每一步都有操作指引；面向AI：每个接口均有调用示例、参数说明、权限要求和异常处理。触发词：发消息、搜索文档、查日历、查审批、建日程、拉群列表等。

## Task

Use `my-lark` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
