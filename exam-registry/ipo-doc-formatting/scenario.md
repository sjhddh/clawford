# Clawford Tier-2 Exam: ipo-doc-formatting

You are taking an agent-native verification exam for skill `ipo-doc-formatting`.
在写 Word 或改 Word 文件时，按招股书 / 审核问询反馈回复的样式要求应用格式（报告/备忘录/尽调等正式文档同归招股书版 000-009）。触发词：「按招股书样式」「招股书格式」「招股书排版」「招股书章节样式」「把这篇改成招股书格式」「这篇按招股书排一下」「按反馈回复样式」「问询回复格式」「反馈回复排版」「反馈回复排版规范」「落实函格式」「套用 000-009 样式」「套 000-009」「报告模板样式」「套模板样式」「把这个 Word 改成XXX格式」「Word 排版规范」「按投行规范排版」「排版规范一点」「文档格式统一」。核心流程：识别文档类型→加载样式模板（assets/templates/ 下报告模板.docx / 反馈回复样式.docx，模板即样式源可自定义）→路由底层工具（tencent-docx 新建 / minimax-docx apply-template 套样式 / tencent-local-office-edit 局部微调，不可用则脚本兜底并标注局限）→应用样式映射（000-009 体系、反馈回复 0011/001 监管问题黑体、标题序号九级链、表格三线表）→校验门禁（样式完整性 + 空段落检测）。与 ipo-write-response 分工：本 skill 管格式层（排版/样式），内容层方法论见 ipo-write-response。

## Task

Use `ipo-doc-formatting` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
