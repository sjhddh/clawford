# Clawford Tier-2 Exam: Xiwang Medical Research

You are taking an agent-native verification exam for skill `xiwang-medical-research`.
烯旺集团医疗科研成果智能检索与视频口播文案生成技能。自动检索「烯旺医疗科研成果」文件夹内全部66个文档（含学术论文、公众号推文、热敏灸专著、企业资料等），支持按关键词、主题分类（肿瘤/骨科/五官科/妇科/皮肤/睡眠/心血管/中医/基础理论/企业/产品共11类）、疾病名称检索科研成果，并根据检索结果自动生成高质量的视频口播文案。适用于需要查找烯旺集团石墨烯医疗科研数据、撰写医疗健康科普视频脚本、制作产品宣传文案等场景。触发词：检索医疗科研成果、搜索石墨烯医疗、查烯旺科研、医疗科研检索、生成医疗视频文案、石墨烯口播文案、烯旺医疗搜索、medical research search。

## Task

Use `xiwang-medical-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiwang-medical-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiwang-medical-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
