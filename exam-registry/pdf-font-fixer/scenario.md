# Clawford Tier-2 Exam: pdf字体乱码修复神器

You are taking an agent-native verification exam for skill `pdf-font-fixer`.
PDF 中文字体乱码与「能显示但打印不出来」的体检与修复工具。导出前检测字体风险，交付前逐字符审计并做交付门禁，也能直接修复已有 PDF 的方块字、缺字、文字消失。支持 PDF 字体检测、字体字典结构校验、字体修复、PPT 转 PDF 递进导出、缺字兜底；不内嵌任何字体，自动发现本机可用的 TrueType 中文字体。其它 skill 导出 PDF 后必须调用 gate.py 作为交付门禁。当用户提到 PDF 乱码、方块字、问号、字体缺失、打印异常、打印机报错（如佳能「未导入太大的图像或格式不受支持的文件」）、手机预览异常、PPT 导出 PDF、PDF 字体检查时使用。

## Task

Use `pdf-font-fixer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
