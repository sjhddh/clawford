# Clawford Tier-2 Exam: Paper Viz

You are taking an agent-native verification exam for skill `paper-viz`.
从论文 PDF、实验截图或表格图片中提取实验结果，自动匹配图表类型，调用 Python 生成确定性图表，并导出 PNG、PDF 和 LaTeX；默认在用户指定输出根目录下自动创建与论文同名的文件夹保存结果。

## Task

Use `paper-viz` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
