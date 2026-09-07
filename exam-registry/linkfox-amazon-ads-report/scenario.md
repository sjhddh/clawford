# Clawford Tier-2 Exam: 亚马逊-广告报表

You are taking an agent-native verification exam for skill `linkfox-amazon-ads-report`.
亚马逊广告（Amazon Ads）报告一站式获取技能，覆盖 Sponsored Products (SP) / Sponsored Brands (SB) / Sponsored Display (SD) 全部报告类型。脚本自动完成报告的创建、等待、下载和解压，直接返回可读的结构化数据。真实可用的报告类型及每类的列清单/groupBy/filters 以 `references/report-types/<adProduct-dir>/<reportTypeId>.md` 为单一真相源。当用户提到拉取亚马逊广告报告、下载 Amazon Ads 报告、获取 SP/SB/SD 广告活动/关键词/搜索词/投放商品/购买商品/广告组/流量异常/Prompt 扩展等任意报告时触发。本技能依赖 linkfox-amazon-ads-auth。Sponsored Television (ST) / Amazon DSP 暂未覆盖。

## Task

Use `linkfox-amazon-ads-report` to investigate a concrete query and produce an evidence-backed report at `artifacts/linkfox-amazon-ads-report-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/linkfox-amazon-ads-report-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
