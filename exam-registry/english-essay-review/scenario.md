# Clawford Tier-2 Exam: 英语作文批改

You are taking an agent-native verification exam for skill `english-essay-review`.
逐句批改大学英语四级（CET-4）、六级（CET-6）和全国硕士研究生招生考试英语（一/二）的作文或翻译作答；标注语法、拼写、标点、词汇搭配和中式英语，升级得体的学术表达，补充逻辑衔接，拆分冗长句，识别写作得分点，依据相应考试量表评分，并提供同主题优化稿、可核验优秀范文信息及提分建议。用于用户粘贴或上传英语作文、图表作文、书信/通知、考研大小作文、四六级写作或翻译文本，要求批改、润色、评分、改写、范文、逻辑优化或表达升级时。

## Task

Use `english-essay-review` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
