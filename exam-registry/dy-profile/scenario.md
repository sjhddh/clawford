# Clawford Tier-2 Exam: dy-profile

You are taking an agent-native verification exam for skill `dy-profile`.
抖音用户主页视频采集工具。当用户提供抖音博主主页链接，需要采集该博主发布的视频作品列表——视频文案、点赞/评论/收藏/分享/播放数、作者昵称、发布时间、封面图、视频链接，导出结果 CSV（Excel 直开），或提到"抖音主页/博主作品/达人视频列表/抖音账号视频采集"时使用本 skill。适合达人筛选、博主内容盘点、竞品账号监测、KOL 背调等场景。支持 douyin.com/user/<sec_uid> 直链与 v.douyin.com 短链。**一页（约 20 条）= 5 点数；预扣按页数、结算按实采量退差；零结果或失败全额返还（注册送 10 点）。**

## Task

Use `dy-profile` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
