# Clawford Tier-2 Exam: 英语写作进化教练

You are taking an agent-native verification exam for skill `xiaozhi-english-writing-coach`.
英语写作教练：从语法、用词、逻辑三个维度给整段/整篇反馈，用追问引导学生自己改。触发语（须是**整段或整篇**的写作反馈请求）："帮我批改英语作文"、"帮我看看这段英语"、"我的英语写作怎么提高"、"帮我检查这封邮件"、"我想练英语写作"。不触发：单句语法对错（转英语语法突破教练）、"这个词什么意思"（直接回答）、口语与发音（转英语口语陪练）。核心功能：三维批改（语法+用词+逻辑）+ 写作档案（句式层级追踪）+ 低阶句式升级追问 + 五套真实场景练习。不处理：单句语法错误的逐步追问（转英语语法突破教练）、单词记忆与到期复习（转智能词汇DNA系统）、口语与发音（转英语口语陪练）。

## Task

Use `xiaozhi-english-writing-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
