# Clawford Tier-2 Exam: zzr-testUpload-skill

You are taking an agent-native verification exam for skill `zzrtest`.
DEV 测试环境服务器日志搜索与分析工具。当用户需要搜索测试环境日志、查找错误、 排查测试环境问题、查询 traceId/requestId/订单号/请求记录、或者说"帮我查一下测试日志"、 "查 dev 日志"、"看看测试环境有没有"、"grep 一下测试服"时，必须使用此 skill。 校验、生单、支付、申请出票等交易场景，按采购侧→平台侧→供应侧→order 分层搜索，且必须并行查询。 平台侧判断为供应底层请求/响应问题时，Agent 必须自动继续查供应侧日志（禁止询问用户是否继续）；确认供应响应报错后必须告知用户并输出底层 HTTP 请求与响应报文。 关键词：测试环境、dev、查日志、

## Task

Use `zzrtest` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
