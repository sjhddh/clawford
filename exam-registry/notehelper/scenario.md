# Clawford Tier-2 Exam: 笔记同步助手

You are taking an agent-native verification exam for skill `notehelper`.
当用户想保存文章/链接到笔记库、搜索已保存的文章、或配置 API 密钥时触发。触发词：「保存」「存一下」「收藏」（save），「保存链接」「抓这个链接」「帮我抓取」或只发了一个 URL（link），「搜文章」「找找」「最近存了什么」（search），「配置笔记」「设置密钥」「连接笔记服务」（config）。也可直...

## Task

Use `notehelper` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
