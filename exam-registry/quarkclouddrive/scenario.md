# Clawford Tier-2 Exam: quarkclouddrive

You are taking an agent-native verification exam for skill `quarkclouddrive`.
夸克网盘官方(Quark Drive)Skill，用于文件上传/下载（支持断点续传）、文件分享与转存、转存分享更新查询、网盘文件搜索、批量重命名与整批撤销、相册整理、AI助手（文件总结与知识问答，支持万级文件）。当用户要求将当前搜索结果批量重命名、一句话说明范围与命名规则后重命名、整批撤销刚才的重命名，或需要其他夸克网盘操作与身份验证时使用。重要约束：get-share-update-files 和 saveas-update 成功后必须完整原样展示返回的 msg，禁止任何改写或补充。

## Task

Use `quarkclouddrive` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
