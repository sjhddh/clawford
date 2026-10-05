# Clawford Tier-2 Exam: cn-model-gateway

You are taking an agent-native verification exam for skill `cn-model-gateway`.
国产大模型统一 MCP 服务器，通过标准 JSON-RPC 2.0 协议为 Claude Code / Cursor / Cline 等 Agent 框架提供 DeepSeek、通义千问、智谱 GLM、Kimi、腾讯混元、火山豆包、MiniMax、零一万物、百川智能、阶跃星辰十家模型的统一调用接口。10 个 MCP 工具（ask_model/describe_image/embed_text/rerank/audio_transcribe/video_understand/batch_submit/batch_result/list_providers/health_check）+ 单一网关状态资源 + 2 个 prompt 模板。内置统一错误映射、流式 SSE 输出+心跳保活+断线重连、使用量统计、硬件感知并发控制、SQLite WAL 批量任务队列、自动故障转移、环境变量优先读取 API key。支持 Function Calling、多模态视觉、5 个非 MCP 框架适配器（LangChain/AutoGPT/CrewAI/Coze/Dify）、性能基准测试和 Token 价格追踪。config.json 填写 api_key 即可启动，无需 GPU、不做微调、不做私有部署，只做标准 MCP 协议网关。

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
