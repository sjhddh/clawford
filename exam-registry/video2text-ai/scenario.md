# Clawford Tier-2 Exam: 视频文案智能提取大师

You are taking an agent-native verification exam for skill `video2text-ai`.
将视频转为文字与结构化文案的技能。当用户提出"视频转文字 / 视频提取文案 / 视频转稿 / 字幕提取 / 视频总结 / 视频内容分析 / 会议纪要 / 课程拆解 / 直播复盘 / 采访整理 / 短视频二创脚本 / 口播稿 / 小红书文案 / 抖音文案 / 公众号文案"等需求时使用。支持本地视频文件与抖音、小红书等平台视频链接，调用千问大模型自动转写并剔除语气词、口误与重复内容，并可通过自定义 Prompt 生成总结、改写、金句提取、分镜头、中英翻译等风格化文案。

## Task

Use `video2text-ai` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
