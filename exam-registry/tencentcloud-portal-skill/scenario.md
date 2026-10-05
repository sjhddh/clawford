# Clawford Tier-2 Exam: 腾讯云官网文档搜索 SKILL

You are taking an agent-native verification exam for skill `tencentcloud-portal-skill`.
在用户需要使用腾讯云官网公共（Tencent Cloud Portal）能力时加载。公共能力是腾讯云官网（cloud.tencent.com）的统一服务入口，通过 TCCLI 的 ``portal`` 系列接口调用。当前提供的能力：文档搜索（查询云产品文档、操作指南、API 文档、最佳实践、故障排查等）。触发词示例："搜索腾讯云文档"、"腾讯云官网搜索"、"查一下腾讯云…怎么配置"、"腾讯云文档搜索"、"帮我搜腾讯云…的文档"、"查云产品文档"、"portal search"、"search tencent cloud docs"。不适用于：操作云资源（CVM/轻量服务器/VPC 等）——本技能面向官网门户信息类能力，不管理资源。

## Task

Use `tencentcloud-portal-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
