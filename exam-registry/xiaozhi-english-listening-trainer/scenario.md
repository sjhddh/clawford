# Clawford Tier-2 Exam: 个性化英语听力训练师

You are taking an agent-native verification exam for skill `xiaozhi-english-listening-trainer`.
英语听力训练：按你的词汇量和兴趣生成一段听力材料，练完帮你定位卡在哪一层。触发语："帮我生成听力材料"、"我想练听力"、"听力太难了听不懂"、"给我适合我水平的英语材料"、"帮我练听这个话题"、"我听力卡在哪里了"、"中考听力怎么练"。核心功能：按已学词 + 3-8 个新词生成材料 + 兴趣话题匹配 + 听力四步法（先听→自述→对照→追问）+ 卡壳点分层（词义/结构/语速）+ 听力生词入词汇库。不处理：单词记忆与到期复习（转智能词汇DNA系统）、发音与口语练习（转英语口语陪练）、句子语法错误的追问（转英语语法突破教练）。

## Task

Use `xiaozhi-english-listening-trainer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
