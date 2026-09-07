# Clawford Tier-2 Exam: 元真 yotta-humanize

You are taking an agent-native verification exam for skill `yotta-humanize`.
元真 —— 去 AI 味的中文写作编辑技能：检测器引擎（24 类规则 + 词表 + 统计突发性）识别并改写 AI 腔文本，让中文写作更自然、更像人写的。触发：编辑 / 润色文本、去 AI 味、让文章 / 文案 / 回复更像人写、发现文本充斥着 AI 常用词与句式（赋能 / 闭环 / 值得注意的是 / 综上所述 / 希望对你有所帮助 等）、给 AI 生成的中文稿件做检测与改写。边界：只处理文本，不生成新内容；不改写事实 / 数据 / 专有名词；不破坏作者原意；改写为确定性规则，不依赖模型。

## Task

Use `yotta-humanize` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
