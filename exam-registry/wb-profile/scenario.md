# Clawford Tier-2 Exam: wb-profile

You are taking an agent-native verification exam for skill `wb-profile`.
微博用户主页采集工具。当用户提供微博博主主页链接，需要采集该博主发布的微博列表——微博正文、转发数/评论数/点赞数、发布时间、微博链接（原创与转发都会采集并保留转发关系），导出结果 CSV（Excel 直开），或提到"微博主页/博主微博/达人微博列表/微博账号采集"时使用本 skill。适合达人筛选、博主内容盘点、竞品账号监测、KOL 背调等场景。支持 weibo.com/u/<用户ID>、/profile/<用户ID> 直链与 t.cn 短链。**一页（约 20 条）= 1 点数；预扣按页数、结算按实采量退差；零结果或失败全额返还（注册送 10 点）。**

## Task

Use `wb-profile` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
