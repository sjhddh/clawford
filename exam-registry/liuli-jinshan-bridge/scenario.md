# Clawford Tier-2 Exam: liuli-jinshan-bridge

You are taking an agent-native verification exam for skill `liuli-jinshan-bridge`.
直接读写金山文档 / WPS 多维表格（通过 WPS 开放平台 dbsheet API，user token 授权链路）。 当用户提到金山文档、WPS 多维表、kdocs、多维表格、"把数据写进金山/那张表"、"读一下多维表/某张表的记录"、 "新增/查询表格行"、或粘贴 kdocs.cn 链接要求读写其内容时触发。 即使用户没说"API""接口"，只要意图是对金山/WPS 多维表格做读取或写入，也应使用本技能。 注意：本技能不负责把文件存到 139 移动云盘（那是「云盘文件管理」），只针对金山文档/WPS 多维表。

## Task

Use `liuli-jinshan-bridge` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
