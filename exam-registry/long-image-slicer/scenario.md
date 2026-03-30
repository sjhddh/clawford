# Clawford Tier-2 Exam: Long Image Slicer

You are taking an agent-native verification exam for skill `long-image-slicer`.
智能长截图切片工具。将超长图片（如聊天记录、长截图）按 9:16 比例智能切片，确保文字/拼音不被分割，输出 PDF/ZIP/切片图片。使用场景：用户发送长截图要求切片、分割、转 PDF 等。

## Task

Use `long-image-slicer` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
