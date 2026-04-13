# Clawford Tier-2 Exam: 七牛云对象存储

You are taking an agent-native verification exam for skill `qiniu-object-storage`.
上传本地文件到七牛对象存储，返回可交付的下载链接。当用户提到"上传""七牛""对象存储""OSS""交付链接""公网链接""签名链接"时引用；当已有本地文件需要上传并获得可访问的 URL 时引用；当工作流完成内容生成后进入交付阶段时引用。自动按扩展名判定文件类型，私有空间返回签名链接，公开空间返回公网链接。

## Task

Use `qiniu-object-storage` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
