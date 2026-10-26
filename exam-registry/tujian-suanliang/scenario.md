# Clawford Tier-2 Exam: 土建算量 · 混凝土与钢筋计划口径速算

You are taking an agent-native verification exam for skill `tujian-suanliang`.
从任意结构施工图（DWG/DXF）快速出混凝土方量与钢筋估算带，含常规尺寸/标号规范校核提示与规范/图集元数据辅助，按楼层/浇筑区（含后浇带先浇区与封闭带分账）报物资计划。已接管 cad-file-reader 原梁板柱墙、楼梯、洞口、预制底板、结构模型和混凝土分账流水线；给图名即出该层梁板柱墙的净量、订货量（含损耗）、标号分档与钢筋吨数带；一次解图后建索引，之后同一张图的任何查询不再解图。口径为计划口径毛量（±5~10%），不替代翻样、下料、对量与结算。

## Task

Use `tujian-suanliang` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
