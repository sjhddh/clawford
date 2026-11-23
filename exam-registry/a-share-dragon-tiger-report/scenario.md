# Clawford Tier-2 Exam: a-share-dragon-tiger-report

You are taking an agent-native verification exam for skill `a-share-dragon-tiger-report`.
生成 A 股「涨停板龙虎榜深度研判报告」提示词 v4.0「宏观锚定 · 五维共振 · 水印隔离 · GCCEO 全量整合 · 投行级量化研判」 （2026-11-12 定稿）。口径 v2.3 六条永久冻结 + KNOWLEDGE 45 键；三层只读旁路叠加： v3.0 五维共振（L0宏观16条只下调 / 策略因子13条 / X-主题17方向三层白名单 / 短线金手24条 / 三类水印，自检14/14） ＋ v3.1 GCCEO 4.0 全量整合（十域91技能 / 投行A1-A10 / 出海G1-G10 / AI超能力8 / 方法论16 / 五步决策框架，自检23/23） ＋ v4.0 投行级量化研判（真值算+缺口标注：估值锚/利润质量/五维形态/Pre-Mortem/缺口台账/全链路，自检25/25）。 GCCEO 以「研判视角映射」接入：只输出标签/清单/风险提问/叙事脚手架，无剔除权、无打分权、无仓位上调权； v4.0 量化层真值算、缺口如实标注，**绝不编造 DCF/LBO/ROE/净现比**，不生成 BUY。 四层漏斗 L1→L2→L2.5→L3（半年口径 + 增速红线 + 利润质量红旗≥2 强否决）一字不改； 情绪五阶段仓位 30/60/70/20/0% 不变。 BII 双栏默认 20 页（前14页 v2.3 逐字不改 + 第15/16页 v3 附录 + 第17/18页 GCCEO 附录 + 第19/20页 v4.0 投行量化附录）； 四态回滚：gceo_quant.enabled=false→18页、gceo.enabled=false→16页、v3.enabled=false→14页（单向强依赖 gceo_quant⊂gceo⊂v3）。 输出 HTML / PDF；样式 A（classic，含 PPTX）仅在明确要求时补出。 内置「十五五 18 方向（102板块+12SW1+70股）」与 Anthropic S-1 → A股 AI 链映射； 蒸馏语料 31 份 + 4 本经典 + 5 份宏观/趋势研报；GCCEO 源 10 域 91 技能。仅交易日生成，非交易日直接说明休市并结束。 v3.1.1 编排层：固化「当日主研判 / 次日预判核验 / 投资大师圆桌」三条流水线的触发前提、 数据契约、产物路径与权限边界（第十八章）。 v3.1.2 资金规模层：按本金规模自适应换结构（小本金 / 机构级 ≥1亿），金额三档单位、 图表刻度、第 10 页由「α 预算纪律」重构为「资金容量与执行约束」（真实 20 日均成交额实算容量表）； 判定内核与冻结口径零改动，自检与页数不变。 v3.2 选股源主口径：selection_mode=limitup 时从当日涨停梯队 + 龙虎榜净买 + 主线资金找， 超跌池降级为位置对照；旧漏斗与冻结阈值一字不改，oversold 可完整回滚。 v3.2.1 涨停源深化：validate() 数据契约六项校验 / verify_covered() 真跑 L2.5·L3 冻结闸门 / capacity_check() 联动 §18.7 资金容量层；第 13 页整表改涨停源观察榜（动作恒 WATCH）， 第 4 页声明 TOP8 截断与闸门实跑，第 13 页说明条登记契约与容量结论；自检 11/11。 v4.0.3 跨会话长期实盘口径：本金 ¥100,000（取代旧 7,000 元），周目标 ¥15,000、 单笔最大亏损 ¥5,000；比例纪律与两套闸门不变，7 亿机构容量口径独立不串味（§18.11）。 v4.0.4 统一深度投研报告流水线：四阶段 A/B/C/D 合并为「一次触发 · 一份主交付」， 2026-11-13 实跑基线（64 内联 SVG / 31 表 / 57 页 A4）、三链 5/20 日净额口径修正 与三重校验清单见 §18.12 及 docs/unified-deep-research-pipeline-20261113.md。 v4.0.5 安全加固：新增 §18.13 工具权限边界与安全声明（行情只读 / 本地文件只写自身产物 / 无凭证访问 / 无自动远端发布）；安装脚本移除 `rsync --delete` 改为备份后逐文件覆盖； 示例 JSON 与样本报告明确标注为 2026-11-13 快照，禁止沿用为当期真值。 **不构成投资建议**。

## Task

Use `a-share-dragon-tiger-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/a-share-dragon-tiger-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/a-share-dragon-tiger-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
