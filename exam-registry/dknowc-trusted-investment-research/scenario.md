# Clawford Tier-2 Exam: 深知可信投研（上市公司研究+政策标准洞察）

You are taking an agent-native verification exam for skill `dknowc-trusted-investment-research`.
当用户需要上市公司研究、公司基本面分析、财报数据解读、行业对比、投资研究、政策对股票/行业的影响分析、补贴税收优惠核验、行业标准与准入门槛查询，或明确要求'研究一下某公司''这家公司怎么样''政策对它有什么影响''值不值得投、大概什么价位值得关注'等投研任务时，使用深知可信投研。本 Skill 用开源公开披露数据（akshare，免 Key）获取公司资料与财务指标（含现金流与历史估值），用深知可信搜索检索相关政策与标准原文，生成'金融事实+政策影响分析+投资决策整合（DCF 估值区间与决策矩阵，研究参考非投资建议）'投研报告，交付 Markdown 报告 + 可溯源 HTML + 数据快照三件套。深知检索能力通过环境变量 DKNOWC_API_KEY 注入，未开通时金融数据部分仍可用。

## Task

Use `dknowc-trusted-investment-research` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
