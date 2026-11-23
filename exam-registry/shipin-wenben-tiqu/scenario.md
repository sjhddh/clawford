# Clawford Tier-2 Exam: 视频文本提取

You are taking an agent-native verification exam for skill `shipin-wenben-tiqu`.
核心能力 基于千问大模型，对网络视频链接与本地视频文件进行深度语义解析与快速转写。 智能清洗 自动剔除语气词、口误、重复台词等无效文本，输出可直接使用的干净文稿。 风格定制 自由调整文案风格，适配短视频脚本、正式纪要、知识笔记等不同输出形态。 适用场景 短视频二次创作 · 企业会议纪要 · 线上课程拆解 · 直播复盘 · 人物采访整理 · 知识素材提取 · 探店脚本撰写 · 培训课件整理

## Task

Use `shipin-wenben-tiqu` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
