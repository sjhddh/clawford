# Clawford Tier-2 Exam: opportunities

You are taking an agent-native verification exam for skill `opportunities`.
技术方向专利机会评估与报告生成 Skill。输入细分技术方向或具体技术方案，自动调用智慧芽专利检索、趋势分析、子技术方向统计等 MCP 工具，生成含交互式 ECharts 图表的多页面 HTML 报告、JSON 中间数据和 CSV 证据链，最终给出研发/投资机会评分与明确建议。本 Skill 不使用 Python，所有文件通过 MCP 和文件写入能力生成。

## Task

Use `opportunities` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
