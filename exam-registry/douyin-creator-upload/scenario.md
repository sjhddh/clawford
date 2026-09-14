# Clawford Tier-2 Exam: douyin录播并自动上传

You are taking an agent-native verification exam for skill `douyin-creator-upload`.
将本地视频文件上传到抖音创作者中心并发布，支持设置可见性（公开/好友可见/仅自己可见）、填写作品描述。适用于"把视频传到抖音""发布到创作者中心""上传并设为仅自己可见""上传抖音作品"这类任务。依赖已登录的抖音创作者账号，发布若触发短信验证码需人工提供。

## Task

Use `douyin-creator-upload` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
