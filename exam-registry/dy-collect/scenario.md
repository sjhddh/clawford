# Clawford Tier-2 Exam: dy-collect

You are taking an agent-native verification exam for skill `dy-collect`.
抖音视频互动数采集工具（社媒指数）。当用户需要采集/查询抖音视频的点赞数、评论数、收藏数、分享数、播放量等互动指标，提交一批抖音视频链接一键批量采集、导出采集结果 CSV（Excel 直开），或提到"抖音采集/互动数采集/视频数据/播放量/社媒指数"时使用本 skill。适合抖音投放结案、互动数统计、活动效果监测、爆款内容分析、达人视频分析等场景。支持 douyin.com/video/<id> 直链与 v.douyin.com 短链。收费服务（1 条视频 = 1 点数，注册送 10 点）。

## Task

Use `dy-collect` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
