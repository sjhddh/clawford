# Clawford Tier-2 Exam: FB 专业内容生成

You are taking an agent-native verification exam for skill `fp-facebook-pro-post`.
生成 FridayParts Facebook 帖子，四种类型一键切换：行业知识科普、客户好评反馈、 KOL合作推广、热点借势营销。每条输出含正文 + hashtag + 配图建议。 技术类内容自动保留"留余地"表述，客评 quote 自动控制在15词内。 Use when: 写 Facebook 帖子 / 客评...

## Task

Use `fp-facebook-pro-post` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
