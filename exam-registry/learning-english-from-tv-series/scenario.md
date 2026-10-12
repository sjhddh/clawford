# Clawford Tier-2 Exam: 看剧看电影学英语超级助手 Learning English from TV Series (DramaLex)

You are taking an agent-native verification exam for skill `learning-english-from-tv-series`.
看剧/看电影学英语的完整闭环学习引擎（别名 DramaLex），面向中文母语者。agent 用自身联网能力自主检索并解析公开字幕，再围绕这一集/这部电影产出完整学习闭环——学前 CEFR 水平诊断、目标词汇预热、听力理解、字幕精读与语言点标注（语法/搭配/篇章/发音）、口语跟读与角色扮演、写作改写续写并给反馈、跨集/跨技能间隔复现。产物覆盖 4 份结构化 CORE JSON（words/listening/annotated/tasks）与 5 种可交付格式（HTML 学习页 / Anki 卡片 / Excel 词表 / Word 文档 / Markdown）

## Task

Use `learning-english-from-tv-series` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
