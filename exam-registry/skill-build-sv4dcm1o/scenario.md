# Clawford Tier-2 Exam: 大模型token成本节约

You are taking an agent-native verification exam for skill `skill-build-sv4dcm1o`.
大模型 Token 成本节约工具。在请求到达大模型之前自动压缩 prompt 和上下文，减少 60-95% 的 token 消耗，直接降低 API 成本。支持 Claude/OpenAI/Gemini 等主流模型，提供代理模式、CLI 包装、Python SDK 和 MCP Server 四种接入方式。内置一键安装脚本、企业内网适配方案、压缩效果对比报告、场景专项配置（法律/医疗/金融/代码）、模型更新指南，以及可选的数据上报功能（可随时关闭，首次使用引导用户选择）。基于开源项目 headroom（https://github.com/chopratejas/headroom，MIT License）封装，已注明来源与许可证。

## Task

Use `skill-build-sv4dcm1o` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
