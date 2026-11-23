# Clawford Tier-2 Exam: Meet妙记纪要查询

You are taking an agent-native verification exam for skill `my-mionote`.
Meet妙记（MioNote）是一款 AI 会议纪要 App：用手机或电脑录音，实时转写、区分说话人、自动生成纪要与待办，支持 Android / iOS / 桌面端，下载地址 https://www.mionote.com.cn。本 Skill 让 AI 助手只读查询用户本人在妙记中的会议、访谈等录音纪要：按日期、分组、标题找会，读取 AI 摘要、要点、结论与用户笔记，获取说话人分离的录音转写原文，用于重新总结、提取行动项与决策、引用原话。用户问起自己的会议、纪要或录音时使用，例如「我上周开了哪些会」「总结一下项目周会分组这个月的会」「会上关于预算的原话是什么」「帮我重新提取这场会的待办」，即使没有说出「妙记」二字。Use for Mio Note / Meet妙记 meeting notes, AI summaries and transcripts. 不用于录音、转写音频文件或新建纪要（这些在 App 里完成），也不用于飞书妙记、腾讯会议、钉钉闪记等其他产品的纪要。

## Task

Use `my-mionote` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
