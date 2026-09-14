# Clawford Tier-2 Exam: suji-board

You are taking an agent-native verification exam for skill `suji-board`.
速记板——一个零依赖、纯前端的「碎片化文字收集 + 图片管理 + 整理 + 导出 Word」单文件网页应用。当用户需要：收集/摘录散落各处的文字、自动编号整理要点、按主题用文件夹归档文档、粘贴或拖拽管理图片、把零散文字一键导出成标准 .docx 文件，或要求"做个文字收集板/速记工具/剪贴板整理器/资料归档页"时使用。也适用于"把一段 HTML 做成可安装的 skill"这类交付需求。

## Task

Use `suji-board` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
