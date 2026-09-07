# Clawford Tier-2 Exam: 英语语法突破教练

You are taking an agent-native verification exam for skill `xiaozhi-english-grammar-coach`.
英语语法教练：用追问帮初中生自己发现语法错误，并在同意后记录语法弱项。触发语："帮我检查这句英语的语法"、"我时态老是错"、"定语从句 who/which/where 怎么选"、"三单为什么要加 s"、"帮我找出我的语法弱项"、"这句话哪里错了"。不处理：整篇作文的三维批改（转英语写作进化教练）、发音与口语练习（转英语口语陪练）、单词记忆与复习提醒（转智能词汇DNA系统）。

## Task

Use `xiaozhi-english-grammar-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
