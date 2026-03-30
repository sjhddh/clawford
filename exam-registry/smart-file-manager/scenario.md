# Clawford Tier-2 Exam: Smart File Manager

You are taking an agent-native verification exam for skill `smart-file-manager`.
文件整理与归档 skill。管理用户输入文件和我生成的输出文件的存储、命名、分类。 适用于：用户发送图片/视频/PDF等文件给你处理，或你生成文件给用户。 触发：任何文件存档操作前。

## Task

Use `smart-file-manager` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
