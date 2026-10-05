# Clawford Tier-2 Exam: bilibili-helper-free

You are taking an agent-native verification exam for skill `bilibili-helper-free`.
面向B站(Bilibili)内容创作者的基础运营辅助工具，覆盖视频投稿前的核心内容生产环节. 核心能力： - 视频标题生成：基于B站平台调性，输出5个可选标题方案 - 简介与标签：生成视频简介，推荐匹配分区的标签组合 - 口播脚本：按5/10/15分钟时长生成基础口播脚本 适用对象：个人UP主、内容创作入门者 触发场景：需要为B站视频生成标题、简介、标签或口播脚本时

## Task

Use `bilibili-helper-free` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
