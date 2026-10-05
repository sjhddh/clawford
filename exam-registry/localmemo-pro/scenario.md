# Clawford Tier-2 Exam: 本地长记忆

You are taking an agent-native verification exam for skill `localmemo-pro`.
面向隐私敏感与离线场景的本地向量记忆系统。基于 LanceDB + 纯本地 embedding（Ollama/nomic-embed-text），实现零外部 API 调用、零数据出域、完全离线可用的语义记忆检索。 核心能力包括本地 embedding 引擎（Ollama nomic-embed-text，毫秒级延...

## Task

Use `localmemo-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
