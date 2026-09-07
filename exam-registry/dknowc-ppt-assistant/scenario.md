# Clawford Tier-2 Exam: 深知可信PPT

You are taking an agent-native verification exam for skill `dknowc-ppt-assistant`.
当用户要求制作 PPT、演示文稿、汇报 PPT、工作总结汇报、课件、宣讲材料、把材料转成 PPT、做幻灯片，或要求可编辑原生 PPT、多版式（16:9/4:3/小红书/朋友圈/竖版/A4）输出时，使用深知可信PPT。生成侧采用约束 SVG → 原生 DrawingML 编译路线：主 Agent 逐页手写约束 SVG，确定性编译器导出真实可编辑的 PowerPoint（原生形状/文本/图表/表格，非整页图片）；内容侧完全使用深知可信智能 API：通过深知可信搜索检索权威政策、数据与案例素材，全程可溯源。内置党政简洁、数据图表、商务汇报、庄重典雅、培训课件等风格预设，默认交付 .pptx 与可信溯源核验报告。

## Task

Use `dknowc-ppt-assistant` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
