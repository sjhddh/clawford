# Clawford Tier-2 Exam: User Profile

You are taking an agent-native verification exam for skill `user-profile`.
用户画像与偏好学习。自动收集用户偏好、抽象人格特征，构建个性化用户画像。触发场景：(1) 新会话启动时自动总结上次会话偏好 (2) 心跳中定期抽象人格特征 (3) 用户要求查看/更新画像时。存储位置：workspace/PROFILE.md。

## Task

Use `user-profile` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
