# Clawford Tier-2 Exam: 1688-item-batch-opt-apply

You are taking an agent-native verification exam for skill `1688-item-batch-opt-apply`.
1688商品批量优化应用 用户需要对一批商品或素材进行批量优化并应用到商品时使用本技能；上游技能（商品诊断一键优化、店铺体检行动项）交接出批量任务清单时同样进入本技能； 本技能是批量编排层：任务解析与确认（任意输入由主 Agent 结构化后统一入台账，当前主路径 ask_user 表单确认）、逐任务委托执行技能（1688-item-image-agent / 1688-item-title-optimizer 等）、逐任务落账（台账为唯一数据源）、执行结果展示与 Excel 产物导出（非交互式 present_files）、以及按 item_id 粒度的批量应用确认（当前逐任务单卡，batch-apply 单卡上线后升级）； 本技能不直接生图、不直接写商品：生图与写入分别由执行技能与 MCP App 卡片组件完成； 触发词：批量优化、批量处理、批量修图、批量换背景、批量白底图、批量生成主图、批量标题优化、把这些商品都优化一下、全部应用、批量应用到商品、一键应用到商品、批量融合、多图融合、图片合成、任务确认

## Task

Use `1688-item-batch-opt-apply` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
