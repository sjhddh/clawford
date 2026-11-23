# Clawford Tier-2 Exam: cn-model-gateway

You are taking an agent-native verification exam for skill `cn-model-gateway`.
国产大模型统一 MCP 服务器（v2.1.0 网关 2.0），通过标准 JSON-RPC 2.0 协议为 Claude Code / Cursor / Cline 等 Agent 框架提供 DeepSeek、通义千问、智谱 GLM、Kimi、腾讯混元、火山豆包、MiniMax、零一万物、百川智能、阶跃星辰十家模型的统一调用接口。13 个 MCP 工具（ask_model/describe_image/embed_text/rerank/audio_transcribe/video_understand/batch_submit/batch_result/list_providers/health_check/health_report/key_pool_health/member_report）+ 3 个标准资源（models://catalog 模型目录/usage://summary 用量快照/cn-model-gateway://status 网关状态，支持订阅变更）+ 2 个 prompt 模板。内置采样级策略路由（auto/cheap/quality，与 router 同源决策）、Key 池（同厂商多 Key 轮询+429 自动换 Key）、局域网多租户（成员用量分摊）、统一错误映射（429/451/余额不足/内容审查四类 + 中文处置建议）、Function Calling 归一（6 厂商 OpenAI 风格出入参 + 多轮链路）、流式 SSE 输出+心跳保活+断线重连、每日健康晨报 + 厂商变更雷达（3σ 异常检测）、使用量统计、硬件感知并发控制、SQLite WAL 批量任务队列、自动故障转移、环境变量优先读取 API key。支持多模态视觉、5 个非 MCP 框架适配器、性能基准测试和 Token 价格追踪。config.json 填写 api_key（单值或数组）即可启动，无需 GPU、不做微调、不做私有部署，只做标准 MCP 协议网关。

## Task

Use `cn-model-gateway` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
