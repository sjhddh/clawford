# Clawford Tier-2 Exam: reading-notes-master

You are taking an agent-native verification exam for skill `reading-notes-master`.
一图解千言的出版级可视化读书笔记生成器（Chart-First 图表驱动 v2.14）。 31 份语料双透镜实测（排版美学 + 视觉密度）；6 大叙事原型、9 大模块、10+6 类组件、 12 类文字→图表映射；v2.2 咨询级页面工艺、v2.3 图形资产管线、v2.4 设计智能前置检索、 v2.5 思维模型库+文生图、v2.6 NG 竖版杂志、v2.7 HBR 横版杂志、 v2.8 科研级图表体系（38 图型×11 大类/9 色板/9 期刊预设/四门验收/20 红线/figure-bridge 桥接）、 v2.9 全图型 4K 级输出（位图长边≥3840 且短边≥2160、矢量等效、DPI 自动反推+像素实测门禁）、 v2.10 期刊设计语料库（31 刊 2026-10 热点英语期刊 PyMuPDF 实测：NG/财经/科研/时尚/特辑 12 类设计语言档案卡 + 7 条跨刊实证设计定律 + 矢量型 vs 图片型 PDF 判别 + IMA 知识库挂接）、 v2.11 期刊 4K 复刻闭环（同一把尺量两次：14 profile 档案卡 × journal_4k_check.py 四门验收 J1 字体 DNA/J2 色板签名/J3 栅格边距/J4 4K 像素，数字闭环取代凭感觉模仿）、 v2.12 IMA 知识库全量吸收（海外期刊杂志 KB 七维设计知识库：思维/模型/图表/版式/照片采集/ 财经拆解/封面设计 + 任意格式电子书→期刊复刻通用管线 epub/docx/pdf/html/md/txt 自动或自定义复刻）、 v2.13 完全复刻模式 exact-replication（原刊每页为不可变矢量底版 → 逐页建模 → 1:1 零偏差复制 → 文字/图片/图表三类内容槽位替换 → 槽位外逐像素 100% 相同验收；TIME_WEEKLY 与 TIME_SPECIAL_EDITION 双档案卡拆分，可推广到任意期刊）、 v2.14 实战反哺·零偏差内容工程与细节门禁（弃用 apply_redactions 改覆盖式替换 + 采样中位色精确覆盖 + WCAG 对比度择优 + CJK 行高静默失败防护 + 漂移页分级局部降级；内容流剥离版权/附录并按全书 N 等分取完整语义短语；右脑优势构图量化、多刊合璧选页配额、细节体检八门门禁、构建报告契约、 SKILL 版本治理 SOP；配套 semantic_stream.py / detail_audit.py / templates/quad-exact/）。 输入一本书的要点/金句/结构，输出图表主导、少文字、出版级排版笔记（HTML/PDF/PPTX/长图）。 触发词：读书笔记、生成笔记、可视化读书笔记、一图解千言、图表化笔记、读书分享、书摘卡片、 reading notes、读书笔记PPT、读书报告、精华笔记、营销笔记、情绪开关、咨询级笔记、论证型笔记、 图形复刻、复刻图表、位图转矢量、图片超分、思维导图导出、图表工具链、设计系统、品牌风格、 UI规范检索、思维模型、模型图型、马斯洛/金字塔/SWOT、飞轮/复利/二八/冰山/决策树、文生图、 竖版笔记、杂志风笔记、国家地理风格、NG风、横版杂志、HBR风、期刊复刻、年度精选、 科研图表、学术图表、SCI 配图、期刊合规、色盲安全、Okabe-Ito、森林图、KM 曲线、雨云图、 山脊图、哑铃图、复合多面板、PRISMA、误差棒、600dpi、4K 图表、4K 出图、投稿包、数据契约、 期刊设计语言、杂志风格复刻、Bloomberg风、Science风、Time风、Vogue风、New Scientist风、 期刊语料、杂志语料、期刊排版实测、图片型PDF、期刊知识库、4K 复刻、期刊级 4K、 高保真模仿、复刻验收、期刊模仿、四门验收、IMA 知识库、七维设计、任意格式复刻、 电子书复刻、期刊设计思维、财经拆解、封面设计、完全复刻、1:1 复刻、逐页建模、 exact replication、exact-replication、版式全复刻、版式 1:1、 内容槽位替换、零偏差验收、其他杂志也一样、四刊合璧、多刊选页、右脑优势、构图量化、 覆盖式替换、中位色精确覆盖、对比度择优、语义片段、全书覆盖采样、细节体检、细节门禁、 分级降级、内容工程、版本治理、技能升级反哺、同一把尺量三次、进一步优化细节。

## Task

Use `reading-notes-master` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
