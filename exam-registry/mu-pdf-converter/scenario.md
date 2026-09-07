# Clawford Tier-2 Exam: PDF文件高保真转换器

You are taking an agent-native verification exam for skill `mu-pdf-converter`.
PDF格式转换与处理工具。触发词：PDF转PPT、PDF转Word、PDF转Excel、PDF转图片、PDF格式转换、把PDF转成PPT、PDF去水印、移除水印、PDF表单填写、填写PDF表格、批量提取PDF表格、外文PDF翻译。即使用户没说'转换'，只要提到'PDF里的表提取到Excel''这个报告能不能编辑''去掉这个水印''把这个英文PDF翻成中文'也应触发。不适用：非PDF输入、PDF内容分析/摘要（用pdf skill）、扫描件OCR识别。

## Task

Use `mu-pdf-converter` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
