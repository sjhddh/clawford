# Clawford Tier-2 Exam: MedXpert 跨机任务箱·低配省算力

You are taking an agent-native verification exam for skill `medxpert-offline-taskbox`.
AI 任务太烧钱？低配电脑也能跑大模型——白天派活，晚上回家让本地模型免费跑完，断网也不停。MedXpert 跨机任务箱：WorkBuddy×DSH（DeepSeek Harness）×本地 Ollama 三级协同，批量/重复/文档/敏感任务零云端消耗，复杂推理才上云端。L1-L5 分级路由已代码级实现（add 自动打标 + route 查询）、失败自动重试、同步包双机合并、防僵尸续跑，纯 Python 零依赖即下即用，旧电脑也能当执行节点。模型 API 涨价？跟它无关。省积分、断网续跑、离线任务队列、任务路由与成本控制都找它。

## Task

Use `medxpert-offline-taskbox` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
