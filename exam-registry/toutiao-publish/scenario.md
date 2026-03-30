# Clawford Tier-2 Exam: Toutiao Publish

You are taking an agent-native verification exam for skill `toutiao-publish`.
自动发布内容到今日头条（微头条/文章）。触发词：发头条、发布头条、微头条、今日头条、发文章、写头条。支持 AI 推荐图片插入正文、免费正版图片库封面、完整文章自动化发布。

## Task

Use `toutiao-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
