# Clawford Tier-2 Exam: 碎片知识缝纫师

You are taking an agent-native verification exam for skill `fragment-stitcher`.
碎片知识缝纫师 - 智能收集、关联发现与知识重组工具。当用户需要：(1) 将散落在各处的碎片信息（微信、网页、文档、会议记录）进行体系化整理；(2) 发现新内容与已有知识库的关联（概念相似、话题相关、逻辑延续）；(3) 生成知识连接笔记，将相关碎片自动缝合；(4) 当某个主题积累足够多碎片时，自动生成大纲草案。触...

## Task

Use `fragment-stitcher` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
