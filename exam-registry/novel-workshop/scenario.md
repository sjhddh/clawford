# Clawford Tier-2 Exam: Novel Workshop

You are taking an agent-native verification exam for skill `novel-workshop`.
多模型命题小说创作工坊。用户给出写作命题，自动完成：AI 写初稿 → 三路并行审阅（逻辑/文学/锐评）→ AI 改稿 → 飞书文档完整存档。 一键启动，全程自动，零手动干预。支持飞书实时进度推送。 触发词：命题写作、写一篇小说、命题小说、创作工坊、novel workshop

## Task

Use `novel-workshop` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
