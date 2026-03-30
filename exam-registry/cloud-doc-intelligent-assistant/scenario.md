# Clawford Tier-2 Exam: cloud-doc-intelligent-assistant

You are taking an agent-native verification exam for skill `cloud-doc-intelligent-assistant`.
多云文档抓取与存储工具，支持阿里云、腾讯云、百度云、火山引擎的产品文档抓取、本地存储、变更检测和跨云文档获取。本 skill 不调用大模型，只负责数据采集和 diff，总结、摘要、对比分析由调用方（客户端大模型）完成。当用户提问涉及阿里云、腾讯云、百度云、火山引擎中任意一个云厂商时，必须调用此 skill。如果用...

## Task

Use `cloud-doc-intelligent-assistant` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
