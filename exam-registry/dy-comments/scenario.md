# Clawford Tier-2 Exam: dy-comments

You are taking an agent-native verification exam for skill `dy-comments`.
抖音视频评论采集工具（分步会话）。当用户需要采集抖音视频下面的评论——发布者昵称、IP属地、评论内容、时间、点赞数、回复@、评论回复，导出评论 CSV（Excel 直开），或提到"抖音评论/评论采集/评论导出/评论分析/评论区舆情"时使用本 skill。支持 douyin.com/video/<id> 直链与 v.douyin.com 短链（短链由节点自动还原）。分步会话制：start 建会话（免费）后按页采集主评论、按需展开回复，每一步实时返回最新增量结果，由 AI 询问用户是否继续（每步 1 点数，注册送 10 点）。适合评论舆情分析、用户口碑调研、评论区选题、直播/活动效果评估等场景。

## Task

Use `dy-comments` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
