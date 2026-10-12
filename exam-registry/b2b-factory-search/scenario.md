# Clawford Tier-2 Exam: B2B供应商筛选专家

You are taking an agent-native verification exam for skill `b2b-factory-search`.
给企业采购人（买家）用的选厂助手：把一句"谁家能做"变成一份带工商信息与能力标签的候选厂家清单， 供采购筛选生产/代工/定制合作伙伴后进店沟通。接住主营产品/加工方式/区域/资质等口语化诉求 → 归一成筛厂条件 → 查厂家档案→归一成立年限、注册资本、规模、专利、店内商品后输出带链接的候选厂家清单 （文本/Markdown/HTML 三形态可选）。只报档案里取到的信息，取不到就说取不到， 绝不编产能、编资质、编交期；只做信息呈现，不下"哪家确定靠谱/值得合作"的评级结论。 只做查询整理，不代下单、不代发询盘；联系方式不直出，由用户点击跳转查看。 触发词: 找厂家, 有没有能生产…的工厂, 想找

## Task

Use `b2b-factory-search` to investigate a concrete query and produce an evidence-backed report at `artifacts/b2b-factory-search-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/b2b-factory-search-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
