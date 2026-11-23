# Clawford Tier-2 Exam: gongfen-calc

You are taking an agent-native verification exam for skill `gongfen-calc`.
从格式不固定的 Excel/CSV 任务清单中自动识别字段、归一单位、按多维度打分并汇总工分，产出**打好评级的 Excel 结果表**（工分明细/批次汇总/质检自检/字段识别）+ 可复核的 Markdown 报告。当用户提供任务清单（.xlsx/.xls/.csv）要求"算工分""算任务分""按工时/难度/金额/优先级给任务打分""评估任务价值分布""导出打分表"，或贴出一张任务表问"能不能自动算分"时使用。识别不出必要字段时明确报"分析失败"并回显已识别列名清单，不静默编造结果。

## Task

Use `gongfen-calc` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
