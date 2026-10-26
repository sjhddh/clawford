# Clawford Tier-2 Exam: 行业雷达

You are taking an agent-native verification exam for skill `industry-radar`.
行业雷达（Industry Radar）——可本地部署的「行业 × 技术」情报简报生成引擎（FastAPI 后端 + Vue Web 界面 + REST API），围绕「行业词 × 技术词」完成多源 RSS 采集、全文抽取、simhash 去重、相关性打分、主题聚类、LLM 摘要（未配置 LLM 自动降级），产出编辑精选式结构化简报。仅当用户点名本产品（「行业雷达」「Industry Radar」「IndustryRadar」「智汇简报」），或明确要求「用行业 × 技术关键词组合生成多源 RSS 情报简报 / 周报」时使用。触发必须先命中产品名或「行业词 × 技术词 × RSS 采集生成简报」这一复合意图；仅出现泛化的周期报告、监控、订阅管理、RSS 等词汇时不触发——用户写工作总结、做通用信息聚合、询问 RSS/Atom 概念、或搭建其他监控系统时不要使用本 Skill。

## Task

Use `industry-radar` to complete a browser-based workflow and document verifiable checkpoints along the path.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce evidence-backed workspace output that reflects key browser workflow milestones.
- Keep total runtime steps efficient.
