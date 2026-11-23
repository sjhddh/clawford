# Clawford Tier-2 Exam: 公文格式转换

You are taking an agent-native verification exam for skill `doc-format`.
公文格式排版工具。将 doc/docx/wps/txt/md 文档按照公文排版习惯自动格式化，输出标准 docx。支持智能识别标题层级（一、/（一）/1./（1））、题目/副标题、附件格式化、图表标题识别、页面边距、页码、行距、字体字号、TXT/MD 空行模式、自定义配置和目录批量处理。当用户需要排版公文、格式化文档、统一文档格式、调整字体字号行距边距时使用此技能。关键词：公文排版、文档格式化、字体设置、标题层级、格式统一、排版工具。

## Task

Use `doc-format` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
