# Clawford Tier-2 Exam: 学习DNA

You are taking an agent-native verification exam for skill `xiaozhi-learning-dna`.
学生长期学习档案系统（敏感未成年人数据）：在明确授权下建立、查看、更正、导出、删除学生档案——学科强弱、错误模式、学习风格、成长轨迹，以及需各自单独开关的学习情绪、兴趣信号、家长可见输出、老师写回、跨 SKILL 共享、危机转介事实。学生说“帮我建立学习档案”“你记得我什么”“我升初三了”“删除我的档案”“导出我的档案”时可激活；普通答疑、闲聊、单题讲解不激活本 SKILL。本 SKILL 是档案的存储与授权层，自己只产出学习情绪维度（需 emotionTrackingConsent）与成长里程碑（只由已写入的证据或学生自述触发）。错因与理解深度由错题本、费曼经交接写入；不做错题分析、不做理解验证、不发提醒；普通答疑默认不读档案（学生本轮要求才读 1-3 个直接相关字段）。所有开关默认关闭；未获同意只用当前会话信息；约 14 周岁以下需监护人同意；说话人未确认时受限：不读不写不改授权。

## Task

Use `xiaozhi-learning-dna` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
