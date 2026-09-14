# Clawford Tier-2 Exam: unisound-med-doc-preprocess

You are taking an agent-native verification exam for skill `doc-preprocess`.
医疗文档预处理公共库。将 pdf/doc/docx/xls/xlsx/csv/txt/json/图片等多格式文件统一加载为标准中间产物（pages / text / json / tables），供其他 skill 的 run.py 调用。

## Task

Use `doc-preprocess` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
