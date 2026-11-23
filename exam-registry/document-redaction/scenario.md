# Clawford Tier-2 Exam: 企业文件批量脱敏

You are taking an agent-native verification exam for skill `document-redaction`.
使用场景: 企业需要按公开规则批量处理 PDF、JPG、PNG，人工确认敏感区域并生成经过复检的对外副本时。

## Task

Use `document-redaction` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
