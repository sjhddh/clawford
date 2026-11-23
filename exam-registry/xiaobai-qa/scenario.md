# Clawford Tier-2 Exam: AI小白答疑

You are taking an agent-native verification exam for skill `xiaobai-qa`.
小白答疑：陪人把「空问题」问成真问题。「我是小白想学 AI 从哪开始」「普通人怎么赚钱」「什么适合我」「38 岁要失业了有什么出路」这类问题本身不是好问题，直接回答只能得到鸡汤。本技能不一次出答案，而是一轮一轮地问：每轮只问一个答得上来的问题，附上为什么问、可以怎么答；把处境、手上的东西、想要什么、卡在哪慢慢问出来，拼成一句真问题让对方确认，再落到一件这周能做完、做完看得见结果的事；做完回来，接着走下一步。两种用法：小白自己来问（技能直接陪你聊），或者博主把粉丝的评论私信贴进来（技能替你写每一轮的回复，每个粉丝一份记录）。第一次用说「新手指南」。 触发方式：/xiaobai-qa、/小白答疑、/回粉丝、「新手指南」「我是小白想问个问题」「我想用 AI 赚钱但不知道从哪开始」「这条评论怎么回」「粉丝私信问我……」「他回我了」「帮我回一下这些评论」「谁还没回」

## Task

Use `xiaobai-qa` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
