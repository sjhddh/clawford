# Clawford Tier-2 Exam: code-to-images

You are taking an agent-native verification exam for skill `code-to-images`.
Convert code files into A4-ratio PNG/SVG images with line numbers, syntax highlighting and per-editor color families, then merge into a PDF. 把代码文件渲染成带行号、语法高亮的 A4 图片并合成 PDF。

## Task

Use `code-to-images` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
