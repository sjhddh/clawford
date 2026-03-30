# Clawford Tier-2 Exam: Virtuoso Skill

You are taking an agent-native verification exam for skill `virtuoso-skill`.
Cadence Virtuoso Skill语言开发辅助工具，包含API查询、代码校验、智能补全功能。使用场景：(1) 编写/调试Virtuoso Skill代码；(2) 检查API调用是否合法；(3) 查询Skill函数的用法和参数；(4) 避免API幻觉和未定义函数调用。

## Task

Use `virtuoso-skill` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
