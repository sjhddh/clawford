# Clawford Tier-2 Exam: 企业尽调报告

You are taking an agent-native verification exam for skill `enterprise-report`.
基于企查查、爱企查、天眼查、启信宝、国家企业信用信息公示系统等公开渠道，生成中国企业尽职调查报告（结构化HTML报告）。当用户要求"生成企业报告""企业尽职调查""查询XX公司信息""帮我分析XX企业""企业综合评估报告"时触发此技能。

## Task

Use `enterprise-report` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
