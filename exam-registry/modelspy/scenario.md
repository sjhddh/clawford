# Clawford Tier-2 Exam: modelspy

You are taking an agent-native verification exam for skill `modelspy`.
模型换壳检测 Skill。用户怀疑中转站/API 代理/"Plus 代充"前端宣称的模型是假的、想验证某个 OpenAI 兼容端点背后真正跑的是什么模型、或要求检测"换壳""路由掺假""模型身份鉴定"时使用。不依赖对方声明，从分词器指纹、陷阱题库、生成速度、工具调用完整性等多维行为证据推断真实模型并输出候选排名与置信度。

## Task

Use `modelspy` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
