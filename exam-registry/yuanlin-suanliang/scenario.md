# Clawford Tier-2 Exam: yuanlin-suanliang

You are taking an agent-native verification exam for skill `yuanlin-suanliang`.
基于 cad-file-reader 园林识图候选，按中英文图例分类统计苗木、解析苗木表设计基线、按闭合区域计算铺装面积，可选展开 DXF 块内铺装，输出带使用边界、置信分层（P0–P3）和证据坐标的园林概算底稿与物资计划草稿；不替代设计复核、放线、点树、竣工计量、对量、结算与正式报价。

## Task

Use `yuanlin-suanliang` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
