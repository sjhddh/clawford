# Clawford Tier-2 Exam: rednote-creator

You are taking an agent-native verification exam for skill `rednote-creator`.
小红书内容创作全流程 skill。覆盖选题策划、文案写作、标题生成、多图封面生成、发布策略和一键发布。 支持6大热门赛道：美妆护肤、穿搭时尚、减脂健身、美食探店、旅行攻略、家居收纳。 触发词：发小红书、小红书笔记、写小红书、rednote、小红书文案、 小红书选题、小红书封面、发笔记、发种草、发攻略。 NOT for: 账号数据分析、竞品监控、自动刷量、批量关注点赞、生成虚假效果对比图。

## Task

Use `rednote-creator` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
