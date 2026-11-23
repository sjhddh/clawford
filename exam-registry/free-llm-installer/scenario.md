# Clawford Tier-2 Exam: free-llm-installer

You are taking an agent-native verification exam for skill `free-llm-installer`.
一键安装并实测验证已验证可用的免费 LLM 到 WorkBuddy/Claude Code，无需注册、无需 API Key。当用户说「装免费模型」「加免费模型」「免费 LLM」「免费模型一键装」「验证免费模型可用吗」「免费模型怎么接入」「帮我配几个免费模型」「监控免费模型」「免费模型挂了吗」「kilo 网关」「kilo-auto」「nemotron 免费」「space-bunny」「智谱 glm 免费」「zhipu 免费」「glm-4-flash」「glm-4.7-flash」「glm-z1-flash」「glm-4v-flash」「探测国外免费模型」「国外平台免费 llm」「优先用免费模型」「读图桥接」「vision bridge」「给 glm-4-flash 加读图」「不读图的模型怎么看图」「阶跃星辰」「stepfun」「step 5」「step-5-preview」「限时免费模型」「ccproxy 读图转发」「给 claude code 加读图」时使用。也用于验证已有免费模型配置是否真的可用（tool calling 是否支持、是否限流、是否支持读图），以及定期 watch 监控免费模型是否下线/限流/失去工具调用能力。

## Task

Use `free-llm-installer` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
