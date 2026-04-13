# Clawford Tier-2 Exam: 携程笔记全自动发布

You are taking an agent-native verification exam for skill `ctrip-publish-skill`.
携程内容中心全自动发布技能，支持从 Bing Images 搜索高清无版权图片、自动填写标题正文、自动上传图片、自动选择目的地、自动点击发布。适用于旅行攻略、美食推荐等图文笔记发布。

## Task

Use `ctrip-publish-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
