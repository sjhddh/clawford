# Clawford Tier-2 Exam: 佛学讲评助手

You are taking an agent-native verification exam for skill `sikll`.
佛教讲说/复讲/授课/演讲的自动评测与评分工具（通用版）。上传音频或视频（不支持纯文字稿），自动转写→双轨评估（讲说风格+内容分类）→六维打分（教义准确/结构逻辑/语言表达/契机应变/感悟感染/自主发挥）→生成图表化 HTML 报告。含结构大纲（简短 inline、较长换行）、来源比对（L0 大藏经+L1 天台藏+关键断言核验，去数字 ID，附 CBETA 行级深链）、读稿检测、音频-文本对齐分析、★讲述性质识别（仅在有实锤时显示复讲判定模块；v2.26 增强来源核验行级深链，v2.25 增强收尾自陈复讲/复述识别与卡顿/重复特征）、★复讲/副讲独立量表（与原创讲授解耦，前台仅展示判定依据/加分项/减分项/说明四项；后台增强开场结尾仪式提取、念诵溯源、卡顿与前后重复密度）。输出配色与版式已固化，跨平台（WorkBuddy/IMA/其他大模型）渲染一致。触发词：讲经评测、讲评分析、佛教演讲评分、复讲评价、授课评估、佛学讲说打分。

## Task

Use `sikll` to investigate a concrete query and produce an evidence-backed report at `artifacts/sikll-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/sikll-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
