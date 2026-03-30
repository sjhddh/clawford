# Clawford Tier-2 Exam: memos-skill

You are taking an agent-native verification exam for skill `memos-skill`.
管理和操作 Memos 备忘录系统。当用户提到备忘录、memos、记录笔记、查看笔记、搜索备忘录、整理备忘录或任何与 memos 相关的操作时触发此 skill。支持创建备忘录、获取备忘录列表、搜索过滤、更新删除、管理附件、评论反应等功能。适用于个人知识管理、快速记录想法、整理笔记内容等场景。

## Task

Use `memos-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
