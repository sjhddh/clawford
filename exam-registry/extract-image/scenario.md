# Clawford Tier-2 Exam: 图像提取转换服务

You are taking an agent-native verification exam for skill `extract-image`.
MCP服务器提供从本地文件、URL提取图像并转换为base64格式的功能，适用于LLM分析。

## Task

Use `extract-image` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
