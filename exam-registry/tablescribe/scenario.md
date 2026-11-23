# Clawford Tier-2 Exam: TableScribe 表格智取

You are taking an agent-native verification exam for skill `tablescribe`.
给需要把截图、扫描件、纸质表格照片变成数据的人：视觉读语义、OCR 读坐标、程序化校验做裁判三路互证，产出 Excel／CSV／JSON 与校验报告。

## Task

Use `tablescribe` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
