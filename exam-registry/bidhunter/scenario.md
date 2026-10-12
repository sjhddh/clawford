# Clawford Tier-2 Exam: 标讯猎手 BidHunter

You are taking an agent-native verification exam for skill `bidhunter`.
国央企招投标信息监控与研判技能。自动采集多平台公告，按资质规则比对可投性（可投/不可投/需确认），生成带研判简报并多通道推送。v1.5 起新增：资质匹配度评分(0-100)、投标日历与开标倒计时、金额/地区/行业多维筛选、零代码规则编辑器、诊断中心、示例模式、集中FAQ、统一命令入口；v2.0 本地AI增强（招标文件AI速读+风险条款识别，零云成本）；v2.5 投标策略建议；v3.0 本地开放API+签名webhook；v3.5 合规红线引擎（31条法定废标红线本地扫描、交标前自查清单、多主体串标隔离，零API成本）；v2.7 报价闸门（品类清算价地板、规模换算线性、单位单价、毛利红线，任一道不过即禁止输出结论金额）。★v2.8 覆盖率重写：修复只读前9000字符导致200页标书95%未读的缺陷，改为结构化分片全覆盖并强制标注覆盖率；修复PDF/DOCX扫描静默失效（此前规则命中恒为0）；新增评分点逐项映射与分值守恒校验、待补材料清单（高危红标签字盖章页缺件）、零响应检测（空洞满足/待补占位/跨项目残留/数字型空洞），无AI key也能出完整简报。触发词：抓招投标、今日哪些能投、标讯监控、标书研判、招投标公告、央企招标、投标资质匹配、AI读标书、投标建议、这份标会不会被废、废标风险、交标前检查、合规红线扫描、多主体投标、会不会被认定串标、报价闸门、这个标报多少、报价复核、出价前检查、这个标值不值得投、报价会不会被废、待补材料清单、还差什么材料、零响应检测、评分点、评分表、评分办法、这个分怎么拿、漏项、丢分、扣分项、待补、待提供、准备什么材料、递交清单、应答表、偏离表、评分台账、评分项跟踪、覆盖矩阵、哪些评分项没写、哪条要求没响应。

## Task

Use `bidhunter` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
