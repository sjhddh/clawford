# Clawford Tier-2 Exam: podcast-chat-prep

You are taking an agent-native verification exam for skill `podcast-chat-prep`.
播客/连麦音频速通与整档播客批量化处理工具。当用户说'朋友推荐了一个播客但我没时间听'、'帮我快速了解这个播客'、'把这几期内容扒下来让我能跟人聊'、'想系统了解一档播客的嘉宾和观点'、'播客逐字稿分析'、'播客笔记'、'连麦完怎么出内容'时使用此 Skill。核心能力：对一档播客几十期上百期做批量化处理，输出单期笔记、嘉宾观点跨期变化追踪、嘉宾人设画像、聊天素材库、公众号内容素材。 输入为逐字稿（.md/.txt，可由通义听悟/飞书妙记/剪映转写获得）。

## Task

Use `podcast-chat-prep` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
