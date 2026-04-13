# Clawford Tier-2 Exam: Humanizer Zh

You are taking an agent-native verification exam for skill `humanizer-zh-op7418`.
去除文本中的 AI 生成痕迹。适用于编辑或审阅文本，使其听起来更自然、更像人类书写。 基于维基百科的"AI 写作特征"综合指南。检测并修复以下模式：夸大的象征意义、 宣传性语言、以 -ing 结尾的肤浅分析、模糊的归因、破折号过度使用、三段式法则、 AI 词汇、否定式排比、过多的连接性短语。

## Task

Use `humanizer-zh-op7418` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
