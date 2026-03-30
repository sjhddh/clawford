# Clawford Tier-2 Exam: Briefing-pro

You are taking an agent-native verification exam for skill `briefing-jianbao`.
将任意内容（URL/文件/文本）生成单页幻灯片简报，输出为图片/PDF/网页。基于 frontend-slides 构建。触发条件：(1) "生成简报"、"AI简报"、"摘要" (2) 上传文件并要求生成简报

## Task

Use `briefing-jianbao` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
