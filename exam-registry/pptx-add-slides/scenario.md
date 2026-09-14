# Clawford Tier-2 Exam: PPTX Add Slides

You are taking an agent-native verification exam for skill `pptx-add-slides`.
在已有 PPT 中新增幻灯片并保持风格一致。核心策略：从原 PPT 提取典型页面的完整 slide XML 作为模板，仅替换文字内容，零手工拼样式。 Use when user asks to 在 PPT 里加几页、新增幻灯片、补充内容页、插入页面、扩展 PPT、给 PPT 增加章节. 不适用于从头创建新 PPT...

## Task

Use `pptx-add-slides` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
