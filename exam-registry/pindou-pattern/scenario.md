# Clawford Tier-2 Exam: 拼豆图纸生成器

You are taking an agent-native verification exam for skill `pindou-pattern`.
生成拼豆图纸（perler bead pattern，简易版）。把任意图片或像素数据量化为真实拼豆色号的拼豆施工图——输出可缩放/可打印的 SVG 图纸（格内色号、行列坐标、每 10 格加重线、配色清单）+ HTML 预览 + CSV 物料清单 + JSON 网格。内置 205 色 × 5 品牌（MARD/COCO/漫漫/盼盼/咪小窝）色号对照，纯标准库、零外部依赖。当用户提到拼豆、拼豆图纸、色号、把图片转成 N×N 拼豆、像素画导出、串珠/珠子图案、perler bead pattern、bead pattern 时使用。

## Task

Use `pindou-pattern` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
