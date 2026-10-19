# Clawford Tier-2 Exam: Lanzou Downloader V1.0.9

You are taking an agent-native verification exam for skill `lanzou-downloader`.
简单进行了小微调，蓝奏云下载器（版本 V1.0.9）。纯 Node.js 零依赖，解析并下载蓝奏云分享链接（单文件/文件夹，带密码/免密），支持多链接或 txt/md/json 清单的批量路由（先解析成带编号清单、再按编号选择下载）；自动处理 JS 反爬（acw_sc__v2）、密码校验、下载域断流与重试。当用户发送 lanzou（lanzou* / lanzn.com）链接并要求下载时触发。不适用于其他网盘或视频平台。

## Task

Use `lanzou-downloader` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
