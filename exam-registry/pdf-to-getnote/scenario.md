# Clawford Tier-2 Exam: PDF 转 GetNotes

You are taking an agent-native verification exam for skill `pdf-to-getnote`.
当用户发送 PDF 文件并要求存入 GetNotes 时触发。执行完整流程：PDF 转图片 → AI 摘要生成 → 创建含摘要和全图片的单一笔记。触发词包括「PDF存到GetNotes」「PDF导入GetNotes」「把这个PDF存笔记里」。

## Task

Use `pdf-to-getnote` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
