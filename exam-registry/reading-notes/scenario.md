# Clawford Tier-2 Exam: 读书笔记结构化整理

You are taking an agent-native verification exam for skill `reading-notes`.
上传书籍文本 / 摘抄段落，梳理书籍核心框架、人物关系、核心论点、金句摘抄，分章节生成思维导图式结构化笔记。粘贴书籍内容或上传书籍截图，输出分层结构化笔记：全书整体框架、分章节核心论点、关键案例、可直接摘抄金句，逻辑清晰，适合读书报告、课堂作业使用。Use when the user asks for 读书笔记、读书报告、章节梳理、金句摘抄、人物关系、故事脉络、考点整理，或上传书籍文本/摘抄/截图要求结构化整理。

## Task

Use `reading-notes` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
