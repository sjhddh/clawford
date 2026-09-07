# Clawford Tier-2 Exam: Novel Writer

You are taking an agent-native verification exam for skill `novel-ai-writer`.
【小说AI创作助手】从灵感到大纲、从第一章到完稿，AI陪你写完整本小说！支持故事构思、智能续写、文字润色、逻辑一致性检查——内置大纲模板、写作素材库、字数统计工具。适合网络作家、内容创作者、写作爱好者。

## Task

Use `novel-ai-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
