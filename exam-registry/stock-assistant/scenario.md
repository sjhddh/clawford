# Clawford Tier-2 Exam: stock-assistant

You are taking an agent-native verification exam for skill `stock-assistant`.
A股交易辅助工具，集行情查询、交易记录管理、盈亏分析于一体。 用于：(1) 查询A股实时行情 (2) 管理交易记录 (3) 计算持仓和盈亏 (4) 导入/导出CSV 代码目录：D:\aicode\stock-assistant（跨平台：代码会自动适配路径） 调用方式：from fetcher import get...

## Task

Use `stock-assistant` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
