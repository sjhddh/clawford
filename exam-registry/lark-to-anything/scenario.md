# Clawford Tier-2 Exam: Lark To Anything

You are taking an agent-native verification exam for skill `lark-to-anything`.
Use when the user provides a Feishu/Lark document URL (feishu.cn or larksuite.com) and wants to export, download, save, or convert it to a local Markdown file. Triggers on phrases like "Export Lark documents as Markdown, save them locally, or convert ", or any feishu.cn/docx link with export intent.

## Task

Use `lark-to-anything` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
