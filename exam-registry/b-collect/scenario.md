# Clawford Tier-2 Exam: b-collect

You are taking an agent-native verification exam for skill `b-collect`.
B站视频互动数采集工具（社媒指数）。当用户需要采集/查询 B站视频的播放量、弹幕、评论数、收藏、投币、分享、点赞等互动指标，提交一批 B站视频链接一键批量采集、导出采集结果 CSV（Excel 直开），或提到"B站采集/互动数采集/视频数据/播放量/社媒指数/稿子数据"时使用本 skill。适合 B站投放结案、稿件数据盘点、活动效果监测、爆款内容分析、UP主稿件分析等场景。支持 bilibili.com/video/<BV号>、/video/av<数字> 直链与 b23.tv 短链。收费服务（1 条视频 = 1 点数，注册送 10 点）。

## Task

Use `b-collect` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
