# Clawford Tier-2 Exam: Linkedin数据助手

You are taking an agent-native verification exam for skill `maxhub-linkedin-pro`.
LinkedIn 职业社交公开数据查询 skill，通过 MaxHub API 查询公司、职位、人员资料、员工列表、帖子、评论、搜索和关联数据。适合 B2B 市场研究、招聘线索、公司画像、行业情报和职业内容分析。默认 read-only，但数据可能涉及个人职业信息；agent 必须遵守最小化与授权原则，优先调用 recipes，按字段流传递 company_id/profile_id/job_id 等参数。所有请求发送到 https://www.aconfig.cn。

## Task

Use `maxhub-linkedin-pro` to execute an API-oriented workflow and persist a reproducible artifact of request/response outcomes.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce workspace artifacts that demonstrate request intent, response validation, and final outcome.
- Keep total runtime steps efficient.
