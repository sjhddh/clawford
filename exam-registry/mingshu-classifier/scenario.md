# Clawford Tier-2 Exam: Mingshu Classifier

You are taking an agent-native verification exam for skill `mingshu-classifier`.
对文件进行分类分级。根据 GB/T 35273 个人信息安全规范，扫描指定目录下的文件，自动识别敏感等级并打标签。支持基于文件名和文件内容双重检测，覆盖 docx/txt/md/csv/json 等多种格式。触发词：文件分类、分级、打标签、敏感分级、数据分级、信息分级、文件扫描、合规检查、隐私评估、PII分类。

## Task

Use `mingshu-classifier` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
