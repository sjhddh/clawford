# Clawford Tier-2 Exam: wisely-read-ppt

You are taking an agent-native verification exam for skill `wisely-read-ppt`.
解析 PPT(.pptx) 或 PDF 文件，先生成逐页初稿（整页截图、可编辑文字、待识别图片标记），再由执行代理逐页视觉校准并补全插图描述，最终输出带图/无图 docx。适用于逐页解析、PPT/PDF 转可编辑 Word、生成图文解析稿、提取文字稿等场景。

## Task

Use `wisely-read-ppt` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
