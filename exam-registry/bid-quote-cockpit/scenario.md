# Clawford Tier-2 Exam: 投标报价对比分析驾驶舱

You are taking an agent-native verification exam for skill `bid-quote-cockpit`.
通用投标报价对比分析驾驶舱。适用于新门店/新项目收到多家供应商报价（支持多轮回标/澄清后报价），需快速产出「总价排名 + 分部分项横向对比 + 单方造价 + 异常报价核查 + 勾稽校验 + 评分定标 + 行动清单」自包含交互式 HTML 看板的场景，并可直接上线发布（云端 Page / 公开链接）。支持条件模块：历史门店数据、评委打分与定标结论均由使用者**可选**提供（提供才渲染对应节）；评委打分一经提供即**固化进 HTML 字节**，任何人任何设备打开结果一致，页面只读不可改。

## Task

Use `bid-quote-cockpit` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
