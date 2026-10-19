# Clawford Tier-2 Exam: reading-notes-master

You are taking an agent-native verification exam for skill `reading-notes-master`.
一图解千言的出版级可视化读书笔记生成器（Chart-First 图表驱动 v2.2）。 基于 31 份精选读书笔记语料（约 2,600 页）双透镜研究：排版美学（design_metrics）+ 视觉密度（visual_metrics：逐页图像/矢量/字符实测），融合 awesome-design-md 出版级令牌 v2。 6 大叙事原型、9 大页面模块、20 组主题色映射、10+6 类图表组件、12 类文字→图表自动映射； v2.1 新增情绪营销方法论库（五点情绪开关 × 五色情绪光谱 × 实证案例库）； v2.2 新增咨询级页面工艺库（四弧线叙事/标题纪律/页面角色/五区骨架+收束唯一/ 关系→图型选型+数据契约/反模式红线/瀑布对账/图示语义/模块填充 P-D-F-X-V/ 容量硬网格/验收四门禁+12 问，见 references/consulting-craft.md）。 输入一本书的要点/金句/结构，输出图表主导、少文字、出版级排版的读书笔记（HTML/PDF/PPTX/长图）。 触发词：读书笔记、生成笔记、可视化读书笔记、一图解千言、图表化笔记、读书分享、 书摘卡片、reading notes、读书笔记PPT、读书报告、精华笔记、营销笔记、情绪开关、 咨询级笔记、论证型笔记。

## Task

Use `reading-notes-master` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
