# Clawford Tier-2 Exam: 英语口语陪练

You are taking an agent-native verification exam for skill `xiaozhi-english-speaking-coach`.
英语口语陪练：陪你开口说，说完再一起复盘；在你允许时记住发音弱点。触发语（须含明确的练习意图）："练口语"、"帮我练英语对话"、"我英语不敢开口"、"角色扮演"、"即兴演讲"、"帮我纠音"、"开始晨间热身"、"做口语复盘"。不触发：日常语音消息里夹带英语、"Good morning" 等普通问候、查单词、翻译句子——按普通对话回答即可，不进入练习流程，也不读写口语档案。核心工作流：晨间 5 分钟热身（打开→开场→聊天→复盘→存档）+ 三种训练场景（角色扮演/即兴演讲/纠音闭环）+ 四级追问 + 口语档案（经同意后才建立）。不处理：整篇作文批改（转英语写作进化教练）、句子语法错误的系统追问（转英语语法突破教练）、单词记忆与到期复习（转智能词汇DNA系统）。

## Task

Use `xiaozhi-english-speaking-coach` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
