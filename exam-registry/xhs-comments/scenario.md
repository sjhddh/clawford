# Clawford Tier-2 Exam: xhs-comments

You are taking an agent-native verification exam for skill `xhs-comments`.
小红书笔记评论内容采集工具（用户洞察）。当用户需要采集/查询小红书笔记的评论内容——昵称、评论正文、点赞数、IP 属地、子评论数，提交一批笔记链接一键批量采集、导出评论明细 CSV（Excel 直开），或提到"小红书评论采集/评论内容/评论抓取/用户评论/评论导出/舆情/笔记评论"时使用本 skill。适合评论区舆情监测、用户反馈收集、爆款笔记评论洞察、KOL 粉丝声音分析等场景。**笔记链接必须带 xsec_token 参数；缺 token / xhslink 短链会自动调用转链 skill xhs-convert-url-pro 转换后提交**。收费服务（1 篇笔记 = 1 点数，注册送

## Task

Use `xhs-comments` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
