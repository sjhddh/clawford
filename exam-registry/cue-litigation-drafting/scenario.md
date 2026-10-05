# Clawford Tier-2 Exam: 诉讼文书起草

You are taking an agent-native verification exam for skill `cue-litigation-drafting`.
专为诉讼律师、法务设计的 AI 文书起草助手。告别“对着空白文档发呆”和“满世界找模板”的痛苦。只需输入案件事实与己方立场（或直接丢入对方起诉状/证据目录），AI 将为你定制起草结构严谨的起诉状、答辩状、质证意见或律师函初稿。每一项诉讼主张和答辩理由，AI 都会自动为你匹配现行有效的法条及类案参考。直接输出可编辑的 Markdown/Word 格式，律师稍作修改即可定稿，大幅节省案头撰写时间。 Triggers: 起草答辩状、起草质证意见、起草律师函、起草起诉状、起草上诉状、draft litigation document

## Task

Use `cue-litigation-drafting` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
