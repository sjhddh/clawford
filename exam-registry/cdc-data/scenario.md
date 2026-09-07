# Clawford Tier-2 Exam: 流感数据周报

You are taking an agent-native verification exam for skill `cdc-data`.
一句话获取中国疾控官方健康报告 自动定位、核验并提取中国疾控中心发布的五类官方报告，包括流感周报、急性呼吸道监测周报、新冠月报及国内外传染病风险评估。 支持最新一期或指定周期查询，自动识别 HTML、PDF 和附件型报告，提取正文、表格与关键指标，并严格限制在中国疾控官方来源。 使用简单：“帮我查找最新一期中国 CDC 流感周报”

## Task

Use `cdc-data` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
