# Clawford Tier-2 Exam: A股涨停板龙虎榜深度研判+财富密码策略

You are taking an agent-native verification exam for skill `a-share-dragon-tiger-report`.
生成 A 股「涨停板龙虎榜深度研判报告」v2.0（21 章结构编号 0–21 + 22 条计算口径 + 财富密码融合层）， 按四层漏斗 L1→L2→L2.5→L3 框架（六条已确认口径 v2，含半年口径 + 增速红线）， 输出 HTML / PDF / PPTX 三件套；内置「十五五 18 方向跟踪池（102 板块 + 12 SW1 + 70 股）」 及三层核验生成器（reports/build_15th5_report.py），可离线复现 WorkBuddy 侧完整产出。 当用户要求生成龙虎榜报告、涨停板深度研判、每日收盘复盘、十五五方向四层核验、 或把 westock / IMA 盘面写入机构风研报时使用。仅交易日生成；非交易日应直接说明休市并结束。 v1.1（21 章 + §16+，26–38 页 PDF，26 页 PPTX）已被 v2.0 取代： v2.0 新增 framework/ 跟踪池数据（102 板块 + 12 SW1 + 70 股 + 口径 v2 结论）与 reports/ 18 方向生成器。

## Task

Use `a-share-dragon-tiger-report` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
