# Clawford Tier-2 Exam: 土建算量 · 混凝土与钢筋计划口径速算

You are taking an agent-native verification exam for skill `tujian-suanliang`.
给一张结构施工图，就能快速得到混凝土方量与钢筋估算带：按楼层、浇筑区、后浇带分账，标好标号分档与规范提示，直接当物资计划和概算底稿用。不用死磕识图，把时间省给复核和现场；搭配 cad-file-reader 安装会自动补齐识图底座。 > 使用边界：本技能输出识图候选/概算草稿（final_quantity=false），不替代翻样、结算或精度承诺；重大结果请人工复核。 《一起吃个反馈》如果这个技能帮你省了时间，欢迎在评论区留一句“你用它算了什么”，或给个 Star——差评更能帮我把口径校准，我每条都会看。

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
