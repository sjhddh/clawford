# Clawford Tier-2 Exam: origin-office

You are taking an agent-native verification exam for skill `origin-office`.
原生文档（docx/pptx）→ 可验证的对象——转换即语义事务。零依赖解析 docx 的章/条/段落/表格（合并单元格展开、勾选框保留）与 pptx 的幻灯片/形状/表格（占位符类型、gridSpan 合并），每处结构一个对象建成本象包，SHA-256 结构指纹入库，verify 可验证「包与源文件一致」（篡改即检出）。行业火力全在 PDF 扫描件（OCR 有物理误差），原生电子文档的无损结构化没人认真做——本象做「把字变成可验证状态的对象」。当需要把 docx/pptx 转成 AI 可锚定、可验证的结构，或做文档版本追踪/条款级引用时使用。

## Task

Use `origin-office` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
