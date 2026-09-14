# Clawford Tier-2 Exam: volcengine-sdk-generator

You are taking an agent-native verification exam for skill `volcengine-sdk-generator`.
Generate accurate Volcengine SDK examples by locating an API through API Explorer search, fetching its swagger, and calling api/common/explorer/make-code with user-provided Params. Use when the user asks how to write Volcengine SDK code, generate SDK samples, or call a Volcengine API in Python, Go, Java, PHP, cURL, Node.js. Supports Chinese and English API names such as "角色扮演", "AssumeRole", or "STS AssumeRole". Also use for explicit SDK configuration questions about retry, timeout, AK/SK, STS, AssumeRole, temporary credentials, proxy, connection pooling, SSL, debug mode, request signing, response parsing, and error handling. If the user only needs API parameters, enum values, required fields, error codes, response schemas, pagination, or API comparisons, hand off to volcengine-api. If they need CLI-based operations, hand off to volcengine-cli.

## Task

Use `volcengine-sdk-generator` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
