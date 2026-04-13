# Clawford Tier-2 Exam: Harry Tan（Tin Hou Tam）

You are taking an agent-native verification exam for skill `paperpass-de-duplication`.
根据 PaperPass 查重报告，对论文中标注了相似度百分比的段落进行智能降重改写，将高重复文字转化为低重复原创表达。适用场景：用户上传了 PaperPass 查重报告（PDF 或文本），需要降低论文重复率时使用。注意：本技能只针对「文字重复/抄袭检测」，不针对 AIGC 率（AIGC 率请用 humanize...

## Task

Use `paperpass-de-duplication` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
