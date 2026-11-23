# Clawford Tier-2 Exam: Tencentcloud MultimodalDocParse OCR

You are taking an agent-native verification exam for skill `tencentcloud-multimodaldocparse-ocr`.
腾讯云多模态解析（文档版）(MultimodalDocParse) 技能包。当用户提供文档 URL 地址时，应自动调用多模态解析（文档版）接口提取文档内容信息。支持 PDF、Word、PPT、Excel、Markdown、TXT、图片、WPS 等多格式文档解析；可配置页码范围、子图解析、任务类型、输出格式等可选参数；接口返回 ZIP 格式结果包下载地址，包内含结构化解析结果（*.md / *.xml / *_ocr_page{N}.json）及文档内提取的图片素材（images/）。结果包的真实结构与字段说明详见 references/result-package-structure.md。

## Task

Use `tencentcloud-multimodaldocparse-ocr` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
