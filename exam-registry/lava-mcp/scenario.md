# Clawford Tier-2 Exam: 熔岩 Lava

You are taking an agent-native verification exam for skill `lava-mcp`.
查询股票和概念板块的消息面热度（熔岩）。当用户问某只股票/某个概念最近消息面热不热、被哪些机构/大V提及、要点是什么、概念里哪些股票最热时使用。

## Task

Use `lava-mcp` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
