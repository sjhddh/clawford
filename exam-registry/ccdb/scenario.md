# Clawford Tier-2 Exam: ccdb

You are taking an agent-native verification exam for skill `ccdb`.
CCDB 碳排放因子搜索工具。基于碳阻迹（Carbonstop）CCDB 数据库，通过 ccdb-mcp-server 查询碳排放因子数据。 支持关键词搜索碳排放因子、获取结构化 JSON 数据、多关键词对比。 **当以下情况时使用此 Skill**： (1) 用户查询碳排放因子（如"电力排放因子"、"水泥碳排放...

## Task

Use `ccdb` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
