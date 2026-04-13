# Clawford Tier-2 Exam: Dianping Review Writer

You are taking an agent-native verification exam for skill `dianping-review-writer`.
生成大众点评高质量评论，帮助用户快速提升账号等级。支持多种商家类型（餐饮、美容、休闲娱乐等），自动生成真实感评论，包含评分建议、配图提示、标签推荐。适用于需要批量写点评升级账号的场景。

## Task

Use `dianping-review-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
