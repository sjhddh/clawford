# Clawford Tier-2 Exam: CNB OpenAPI Skills

You are taking an agent-native verification exam for skill `cnb-openapi`.
与 CNB (Cloud Native Build) Open API 交互，用于代码管理和开发协作。当用户需要查询项目、代码仓库、问题、合并请求或其他开发相关数据时使用。需要 CNB_TOKEN 环境变量进行身份认证。API 请求地址从环境变量 CNB_API_ENDPOINT 获取，默认为 https://a...

## Task

Use `cnb-openapi` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
