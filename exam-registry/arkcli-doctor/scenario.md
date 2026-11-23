# Clawford Tier-2 Exam: arkcli-doctor

You are taking an agent-native verification exam for skill `arkcli-doctor`.
arkcli doctor 统一入口，覆盖 CLI 健康、account、error、infer-endpoint、model、metrics、report 与 Ark 图片/视频来源特征验证。用户给 1-20 个媒体 URL 并问是否由 Ark/Seedance/Seedream 生成时，走 doctor +verify-origin：整批只披露并确认一次费用，确认前不发 Create/Get 业务请求，最终完整转交服务端 JSON，禁止解释 IsOfficial。其余错误码（包括 ServerOverloaded、ModelNotOpen）、模型名、ep-xxx、失败/慢/超时/限流、健康度、P99/Cache、内容审核、DNS/TCP/TLS/时钟等按正文诊断路由。来源验证不判断内容真假、版权归属、法律认证或内容安全。安装/登录/profile/API Key 归 arkcli-shared/auth；纯用量明细归 arkcli-usage；部署、Endpoint CRUD、模型元信息归对应 skill。

## Task

Use `arkcli-doctor` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
