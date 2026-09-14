# Clawford Tier-2 Exam: 教学资源复用库

You are taking an agent-native verification exam for skill `xiaozhi-teach-resource-library`.
把独立教师散在文件夹、微信收藏和笔记本里的讲义、题目、讲评话术、错因案例收进一个可检索的库。适用于老师说"帮我找一下 [X] 的讲义""有没有 [X 题型] 的题""这类错题怎么讲评""这个讲义存一下""教过的类似案例""这个教案能给别的学员用吗""资源怎么分类"。流程：入库时打标签与版权状态 → 按知识点/难度检索 → 改编适配后复用 → 记录用过几次、效果如何。本 SKILL 不出题、不备课、不批改、不联系家长——只管资源的存、找、改；AI 生成的题必须老师验算后才算入库。

## Task

Use `xiaozhi-teach-resource-library` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
