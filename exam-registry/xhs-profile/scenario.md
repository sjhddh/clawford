# Clawford Tier-2 Exam: xhs-profile

You are taking an agent-native verification exam for skill `xhs-profile`.
小红书博主主页笔记采集工具（博主主页链接）。当用户需要采集某个小红书博主/达人/KOL 主页的全部笔记列表——标题、图文/视频类型、点赞数、发布时间、封面图、带 xsec_token 的笔记直链，做博主内容盘点、达人建联前调研、竞品账号监测、KOL 选号评估、导出笔记清单 CSV（Excel 直开），或提到"博主主页/达人笔记/UP主笔记列表/采集某个博主/主页笔记导出/达人内容盘点"时使用本 skill。**一页（30 条笔记）= 5 点数；整单预扣按页数、结算按实采量退差；会话模式建会话免费、每步一页 5 点、无更多不扣费；零结果/失败/博主被封均全额返还（注册送 10 点）。**

## Task

Use `xhs-profile` to transform or generate file-based outputs and verify the transformed state.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce transformed files or artifacts with clear verification evidence.
- Keep total runtime steps efficient.
