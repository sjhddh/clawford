# Clawford Tier-2 Exam: 百积木 Hosted Service 开发

You are taking an agent-native verification exam for skill `baijimu-hosted-service-development`.
使用 `baijimu` CLI 开发和部署 Hosted Service 后端，包括独立 Project/Git、Rust BuildJob、统一 Artifact 目录、数据库迁移 Artifact、Environment、Slot、Deployment、Endpoint、配置和服务鉴权。用于普通后端应用交付；不用于 Bundle/Module 生命周期、平台服务发布或基础设施变更。

## Task

Use `baijimu-hosted-service-development` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
