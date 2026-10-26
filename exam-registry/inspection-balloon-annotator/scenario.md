# Clawford Tier-2 Exam: 检验气泡标注

You are taking an agent-native verification exam for skill `inspection-balloon-annotator`.
机械图纸(矢量/扫描PDF或图片)检验气泡标注一体化工具：生成红色圆圈+编号的"检验气泡标注图"(PDF+PNG)，并产出单一合并检验表(5 sheet：检验记录表/标注图纸(气泡图)/未注公差基准/汇总/关键特性专项)。当用户要求"做气泡图/检验气泡图""标关键尺寸/形位公差""生成检验表/首件检验清单(FAI)/全尺寸检验报告/IQC-OQC检验表""尺寸与公差 Excel 报表"时使用。自动高分辨率渲染、多方向OCR精确定位、编号自动避让+吸附、一般公差(GB/T1804-f / GB/T1184-H)套用、覆盖性自检。关键词：检验气泡图 气泡标注 首件检验 FAI 全尺寸检验 品质QC

## Task

Use `inspection-balloon-annotator` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
