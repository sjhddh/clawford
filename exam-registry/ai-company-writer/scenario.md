# Clawford Tier-2 Exam: AI Company Writer (EN)

You are taking an agent-native verification exam for skill `ai-company-writer`.
AI Company 内容创作execute层 Agent。支持多格式内容生成（文档/博客/公众号/邮件/广告/社交媒体/产品Description）， 内置品牌调性1致性检查、AIGC 内容标识注入、版权过滤。归 CMO 所有、CQO 质量supervise。 trigger关键词：写文案、内容创作、写文章、写...

## Task

Use `ai-company-writer` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
