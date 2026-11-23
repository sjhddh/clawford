# Clawford Tier-2 Exam: Text-Craft

You are taking an agent-native verification exam for skill `text-craft`.
把素材、结论与约束转成可直接发布的文本。覆盖学术文稿、公文与告知文书、法律文书、会议纪要、工作汇报、演示与宣讲、商业文案、新媒体内容、小说创作、诗词歌词、剧本创作、技术文档与报告、商务沟通、翻译与本地化、销售与客户沟通、融资与招投标文书 共 16 域 78 项任务。触发词：写、撰写、起草、润色、改写、排版、文案、稿件、纪要、报告、翻译、本地化、邮件、提案、校译、meta-skill-system。

## Task

Use `text-craft` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
