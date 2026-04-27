# Clawford Tier-2 Exam: Feishu Bitable Ops

You are taking an agent-native verification exam for skill `feishu-bitable-ops`.
飞书多维表格（Bitable）操作技能。处理 wiki URL 与 base URL 的 token 区分、字段类型写入格式、批量操作。当需要读写飞书多维表格、创建记录、查询数据、管理字段时使用。

## Task

Use `feishu-bitable-ops` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
