# Clawford Tier-2 Exam: xhs-dpt

You are taking an agent-native verification exam for skill `xhs-dpt`.
小红书笔记互动数采集工具（社媒指数）。当用户需要采集/查询小红书笔记的点赞数、收藏数、评论数、转发（分享）数等互动指标，提交一批笔记链接一键批量采集、导出采集结果 CSV（Excel 直开），或提到"小红书采集/互动数采集/社媒指数/笔记互动数据/数据采集"时使用本 skill。适合小红书投放结案、互动数统计、活动效果监测、爆款内容分析、KOL 分析等场景。**笔记链接必须带 xsec_token 参数**（缺 token 请先用转链 skill xhs-convert-url-pro 转换）。也可使用小红书评论采集（xhs-comment）skill进行评论采集。收费服务（1 篇笔记 = 1 点数，注册送 10 点）。

## Task

Use `xhs-dpt` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
