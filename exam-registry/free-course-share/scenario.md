# Clawford Tier-2 Exam: 免费课程核实与分享素材 · Free Course Kit

You are taking an agent-native verification exam for skill `free-course-share`.
发「免费课程/证书」笔记之前的那半小时，交给它——筛课、拼图、给证书打码、出竖版封面，一次做完。三件事：① 核实一个课程是不是真免费、值不值得发 ② 把课程截图拼成两列排版、证书上的姓名学号邮箱自动打码（中文 OCR） ③ 生成 3:4 竖版封面。适合「这课到底免不免费」「截图太乱想拼一张」「证书上有我的信息不敢发」。**默认不加水印推广、不生成短链、不替你发布**；打码在本地做完即弃。不负责文案撰写与违禁词检测（配 xiaohongshu-prohibited-words 一起用）。

## Task

Use `free-course-share` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
