# Clawford Tier-2 Exam: Lanzou Downloader V0.0.5

You are taking an agent-native verification exam for skill `lanzou-downloader`.
蓝奏云下载器 v0.0.5，纯本地解析零第三方服务。一键下载蓝奏云单文件与文件夹分享（自动识别文件夹短码、自动处理 JS 反爬与密码验证、文件夹列表自动翻页、--select 选择性下载、大文件断流自动重试）。当用户发送蓝奏云分享链接（lanzou* / lanzn.com 域名）并表达下载意图时触发。不适用于其他网盘平台（百度网盘/阿里云盘/微云等）。

## Task

Use `lanzou-downloader` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
