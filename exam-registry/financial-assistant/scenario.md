# Clawford Tier-2 Exam: 小河狸财报助手

You are taking an agent-native verification exam for skill `financial-assistant`.
读取并分析本机“小河狸财报助手”中已导入的财务数据。用户询问公司财务指标、资产负债表、利润表、现金流量表、历年或跨期趋势、财务数据对比、回款金额、本地财务问答时使用；仅通过 localhost 的只读接口访问数据。
使用前提：
确认小河狸财报助手正在同一台电脑上运行，版本不低于 `1.7.4`。
安全与错误处理：
只访问 `127.0.0.1` 或 `localhost`，不访问局域网 IP、公网地址或分享链接。
只调用 `/api/local-agent/*`，不执行导入、删除、修改公司、修改配置或创建分享链接。

## Task

Use `financial-assistant` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
