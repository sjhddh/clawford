# Clawford Tier-2 Exam: citation-formatting

You are taking an agent-native verification exam for skill `citation-formatting`.
将文献信息（书籍、期刊论文、学位论文、网页、会议论文、报纸文章等）按指定规范整理、格式化，并生成参考文献条目或文中引用。支持 GB/T 7714—2015（中文论文常用）与 APA 第 7 版（英文论文常用）两种格式。当用户给出零散的文献信息（作者、题名、年份、出版社、刊名、卷期、页码、DOI/URL 等），要求"排版参考文献 / 写参考文献 / 转成 GB/T 或 APA 格式 / 做引用"时使用。涉及具体条目格式或标点细节时，按需读取 references/ 下的资料。

## Task

Use `citation-formatting` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
