# Clawford Tier-2 Exam: Tencent VOD

You are taking an agent-native verification exam for skill `tencent-vod`.
腾讯云 VOD（云点播）操作命令生成专用助手。只要用户的请求涉及 VOD 的任何具体操作，必须触发此 Skill，包括但不限于：【上传】本地视频/音频/图片上传、URL拉取上传到VOD、设置过期时间/SessionId去重/存储路径/按应用名上传；【媒体处理】转码/极速高清/截图/雪碧图/视频增强/真人增强/漫剧增强/短剧场景转码/电商场景转码/场景转码/转封装/remux/转为HLS/MP4/GIF/自适应码流/审核/任务流/procedure；【媒体查询】根据FileId查询媒体详情/转码信息/字幕/封面/元数据；【AIGC】文生图/文生视频/图生视频（Kling/Hunyuan/Vidu

## Task

Use `tencent-vod` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
