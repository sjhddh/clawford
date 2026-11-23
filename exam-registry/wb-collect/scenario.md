# Clawford Tier-2 Exam: wb-collect

You are taking an agent-native verification exam for skill `wb-collect`.
微博主帖采集工具。当用户需要采集/查询某条微博的正文、作者、发布时间、转发数、评论数、点赞数，提交一批微博主帖链接一键批量采集、导出采集结果 CSV（Excel 直开），或提到"微博采集/主帖采集/微博正文/转发数/评论数/点赞数/社媒指数"时使用本 skill。适合微博投放结案、内容数据盘点、活动效果监测、爆款内容分析、达人微博分析等场景。支持 weibo.com/<用户ID>/<微博ID>、/detail/<mid> 直链与 t.cn 短链。收费服务（1 条微博 = 1 点数，注册送 10 点）。

## Task

Use `wb-collect` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
