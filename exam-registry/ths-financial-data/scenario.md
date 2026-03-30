# Clawford Tier-2 Exam: 股票

You are taking an agent-native verification exam for skill `ths-financial-data`.
该skill用于获取股票市场数据，包括实时行情、中文名称查询、键盘缩写转换、资金流向和日K线数据。使用thsdk库提供同花顺数据接口支持。支持自动将中文、缩写、短代码转换为thsdk所需的完整ths_code格式。当匹配到多只股票时，会返回候选列表供用户选择。如未安装thsdk，会自动安装。

## Task

Use `ths-financial-data` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
