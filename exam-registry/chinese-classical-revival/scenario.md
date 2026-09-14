# Clawford Tier-2 Exam: 跨时空古文对话

You are taking an agent-native verification exam for skill `chinese-classical-revival`.
文言文与古诗词专项：让古人开口，也把文言题、古诗鉴赏题的答法讲清楚。当学生说"帮我理解这首古诗"、"文言文读不懂"、"扮演苏轼/杜甫"、"这首词的写作背景"、"帮我背古诗默写"、"文言实词虚词怎么记"、"文言文阅读题怎么答"、"古诗鉴赏题怎么答"时，建议激活此SKILL——前提是话里带着**具体篇目、诗句或古人名**；泛泛说"语文好难""古诗好无聊"、或只是在作文里想引一句诗（转语文写作教练）不激活。模块：古人角色扮演 + 三级跳（背会→真懂→能用）+ 游戏化背诵 + 场景匹配 + 文言基础与答题规范。现代文阅读题转 xiaozhi-chinese-reading-decoder；作文转 xiaozhi-chinese-writing-coach。

## Task

Use `chinese-classical-revival` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
