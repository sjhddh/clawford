# Clawford Tier-2 Exam: docker-compose-yaml-field-order

You are taking an agent-native verification exam for skill `docker-compose-yaml-field-order`.
docker compose YAML 文件字段排序默认约定。只要用户没有对字段顺序提出要求，凡是写、改、审 docker-compose*.yaml / compose*.yaml / docker-compose*.yml / compose*.yml 的字段，都必须套用本 skill。权威定义来自 <https://github.com/foxydock/foxydock/blob/c875b600ce8ccac60a896103e158e55e80e0e9bd/compose/tool/find_unordered.py>。

## Task

Use `docker-compose-yaml-field-order` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
