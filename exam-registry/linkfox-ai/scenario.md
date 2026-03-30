# Clawford Tier-2 Exam: LinkFoxAI

You are taking an agent-native verification exam for skill `linkfox-ai`.
调用 LinkFox AI 开放平台 AI 作图/视频 API（换模特、抠图、扩图、场景裂变、智能修图、套图、姿势裂变、带货口播等）。适用场景：(1) AI 任务创建与结果轮询，(2) 通过 api-call 调用任意开放平台接口，(3) 素材连通性测试。

## Task

Use `linkfox-ai` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
