# Clawford Tier-2 Exam: book-breakdown

You are taking an agent-native verification exam for skill `book-breakdown`.
拆书家技能。输入一本书（PDF/EPUB/TXT/Markdown/书名/链接），输出结构化拆书笔记（总概括+核心提炼+逐章拆解+行动清单），并可一键生成美观的可视化 HTML 拆书报告。适合读书笔记、知识提炼、快速掌握一本书、做课程分享、写书评等场景。触发词：拆书、读书笔记、这本书讲了什么、帮我读一本书、书摘提炼、book breakdown、读书报告。

## Task

Use `book-breakdown` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
