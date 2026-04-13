# Clawford Tier-2 Exam: ai-redaction-beta

You are taking an agent-native verification exam for skill `ai-redaction-beta`.
一款专为个人用户设计的智能文件脱敏工具，强调纯个人独立模式。支持通过自然语言指令，脱敏用户上传的文件，对 PDF、Word、图片等多种格式的文件进行快速、精准、安全的隐私信息处理。处理完成后返回查询链接，可查看处理进度和下载结果

## Task

Use `ai-redaction-beta` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
