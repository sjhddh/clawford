# Clawford Tier-2 Exam: 智能词汇DNA系统

You are taking an agent-native verification exam for skill `xiaozhi-english-vocabulary-dna`.
英语词汇复习：按间隔重复排到期日，每天把到期的词合并成一张词卡。触发语："帮我记单词"、"把这个词存进词汇库"、"我单词背了就忘"、"下周要学新课了"、"启动词汇预热"、"帮我复习词汇"、"我的词汇库里有什么"。核心功能：三种入库方式 + SM-2 间隔重复排到期日 + 每日一张到期词卡（提醒由 IM 提醒统一发送）+ 课前预热雷达 + 个人遗忘速度调整。不处理：句子语法错误的追问（转英语语法突破教练）、整段作文批改（转英语写作进化教练）、发音是否标准（转英语口语陪练）。

## Task

Use `xiaozhi-english-vocabulary-dna` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
