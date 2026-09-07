# Clawford Tier-2 Exam: gb-cad-figure

You are taking an agent-native verification exam for skill `gb-cad-figure`.
按中国国家标准(GB/T)生成正式工程图纸与CAD模板的可复用工作流：A3图框、标题栏、线型、国标尺寸标注、字体、比例、技术说明/图例、等轴测回转体(lathe/平滑轮廓)+引线式标注(LDIMS)+中心线+瓶底拱形，三格式交付(PDF+DXF+DWG)。开源品牌名 gb-cad-figure = GB国标 + CAD + 图形(figure)。 When to use: 当用户要求"按国标出工程图纸"、"画图框/标题栏/尺寸标注"、"生成CAD模板(.dwt)"、"正式工程制图"等涉及机械/建筑制图规范(GB/T)任务时使用。

## Task

Use `gb-cad-figure` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
