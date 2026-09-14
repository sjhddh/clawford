# Clawford Tier-2 Exam: BiliYouTik2Brain

You are taking an agent-native verification exam for skill `biliyoutik2brain`.
视频→结构化知识引擎 v4.0。触发：B站/YouTube/抖音/小红书链接→转录+结构化分析+知识归档。不触发：纯文本内容/非视频链接/无URL的对话。单条命令完成采集→转录→LLM修复→分析→保存。支持一键部署、4+N平台插件、反爬中间件、OCR关键帧、多格式输出(笔记/卡片/富文本/错题)、反馈闭环、图文并...

## Task

Use `biliyoutik2brain` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
