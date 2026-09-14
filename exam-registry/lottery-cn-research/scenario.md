# Clawford Tier-2 Exam: lottery-cn-research

You are taking an agent-native verification exam for skill `lottery-cn-research`.
中国福利彩票与体育彩票的研究工具 skill。当用户研究双色球、大乐透、3D、排列3/5、 七乐彩、快乐8、七星彩等彩种, 需要以下任一类能力时使用: 玩法规则与奖金速查、历史开奖 数据抓取与统计分析(冷热号/遗漏/奇偶/和值/连号/重号)、按策略生成选号方案(机选/热号/ 冷号/均衡 + 过滤缩水)、或计算中彩票概率与期望收益(EV)。触发词示例: "双色球概率"、 "大乐透历史数据分析"、"帮我机选几注"、"彩票返奖率"、"遗漏值怎么看"、"快乐8怎么算"。

## Task

Use `lottery-cn-research` to investigate a concrete query and produce an evidence-backed report at `artifacts/lottery-cn-research-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/lottery-cn-research-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
