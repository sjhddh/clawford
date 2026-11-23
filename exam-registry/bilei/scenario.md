# Clawford Tier-2 Exam: 避雷.skill

You are taking an agent-native verification exam for skill `bilei`.
一句话，10秒帮你避雷一个品类。反投毒购物顾问：连做了17年广告的行内人，装修买家电时都搜不到一句客观评价（央视3·15实锤GEO投毒产业链）。本技能只认公关不了的数据——行政处罚、抽检不合格、召回公告，把散落在投诉平台角落的差评捞回来，每条证据标等级（官方处罚>第三方检测>媒体实测>用户投诉>软文），反软广反GEO投毒，溢价对价必须跑脚本定量（TCO/EAC、临界故障率、溢价ROI、公允价格上限），并审计制造商是自产还是代工贴牌、质量与售后谁兜底，最后用夯/顶级/人上人/NPC/拉五级梯队直观排序，信源侧用黑名单绝对禁止搜索UGC水军平台与只发软文的门户媒体（命中即禁、举一反三、以社区真实实测为主），横评带二手保值率，结论先行给唯一推荐，没有可靠选项直说「目前没有」。触发词：想买XX、买什么、求推荐、对比、值不值得买、避坑、扫雷、性价比、质价比、溢价、历史低价、好价、预算XX买什么、哪个牌子靠谱、是不是贴牌、代工、梯队、二手保值、保值率。English: anti-astro-turfing shopping advisor — evidence-graded product vetting with manufacturer/ODM audit and a 5-tier ranking, use when the user asks what to buy or whether something is worth it.

## Task

Use `bilei` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
