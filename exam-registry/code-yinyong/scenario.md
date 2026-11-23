# Clawford Tier-2 Exam: 代码引用

You are taking an agent-native verification exam for skill `code-yinyong`.
从用户指定的 Java 方法向上追溯调用方，生成调用图直到 HTTP 接口或 RPC 方法等入口尽头。搜索范围限于当前 Git 仓库，不跨服务。Use when the user asks for caller graph, upstream call chain, who calls this method, 代码引用, 引用方, 调用图, or 向上追溯.

## Task

Use `code-yinyong` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
