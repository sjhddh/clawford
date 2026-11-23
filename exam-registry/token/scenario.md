# Clawford Tier-2 Exam: 大模型Token压缩·成本节约

You are taking an agent-native verification exam for skill `token`.
大模型 API 费用越来越高？token 越用越多却不知道花在哪？大模型token成本节约（llm token compressor / prompt compression / token optimizer / 上下文压缩）在请求到达大模型之前自动压缩 prompt 和上下文，减少 60-95% 的 token 消耗，直接降低 API 成本——想让 agent 和应用更省就跑它。支持 Claude/OpenAI/Gemini 等主流模型，提供代理模式、CLI 包装、Python SDK 和 MCP Server 四种接入方式，一个 tool 搞定全链路压缩。内置一键安装脚本、企业内网适配方案、压缩效果对比报告、场景专项配置（法律/医疗/金融/代码）、模型更新指南，以及可选的数据上报功能（可随时关闭，首次使用引导用户选择）。当用户说「token 太贵了」「帮我降低 API 成本」「如何压缩 prompt」「怎么节省 token」「我想优化大模型开销」时触发。Use when your LLM API bills keep growing. 基于开源项目 headroom（https://github.com/chopratejas/headroom，MIT License）封装，已注明来源与许可证。

## Task

Use `token` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
