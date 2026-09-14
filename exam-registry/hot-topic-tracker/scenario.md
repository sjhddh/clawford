# Clawford Tier-2 Exam: Hot Topic Tracker

You are taking an agent-native verification exam for skill `hot-topic-tracker`.
【2026增强版】自动抓取抖音/小红书/知乎/B站/微博热点榜单，使用当前可用最强模型进行智能分析，生成选题库并保存到腾讯文档。支持多模态热点识别、趋势预测、竞品对比。当用户说"今天有什么热点"、"生成选题库"、"抓取热点榜单"、"帮我看看最近什么火"、"分析热门趋势"、"热点选题"时触发此技能。

## Task

Use `hot-topic-tracker` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
