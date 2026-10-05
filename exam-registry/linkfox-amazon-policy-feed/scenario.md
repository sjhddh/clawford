# Clawford Tier-2 Exam: 亚马逊-最新政策资讯

You are taking an agent-native verification exam for skill `linkfox-amazon-policy-feed`.
查询亚马逊最新政策法规与资讯，支持按站点、时间区间分页检索资讯列表（含 AI 中文摘要），并按记录 ID 获取完整正文。当用户提到亚马逊政策法规、卖家合规公告、平台规则变动、政策预警、FBA/费用政策更新、多站点政策动态、政策原文、资讯详情，或 Amazon policy feed, seller compliance, policy changes, regulation alerts 时触发此技能。即使用户未明确提及"政策法规"，只要其需求涉及亚马逊官方面向卖家发布的政策法规与资讯及其原文，也应触发此技能。

## Task

Use `linkfox-amazon-policy-feed` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
