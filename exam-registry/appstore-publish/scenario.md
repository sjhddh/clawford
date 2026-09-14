# Clawford Tier-2 Exam: 个人应用商店发布助手

You are taking an agent-native verification exam for skill `appstore-publish`.
个人应用商店全流程 skill：①发布构建好的安装包（登记 + 上传 + 返回检查更新地址）②指导把自动更新检查集成进应用。支持 APK/EXE/DMG 等多格式。在打包完要发布、或要把应用接入商店自动更新时调用。

## Task

Use `appstore-publish` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
