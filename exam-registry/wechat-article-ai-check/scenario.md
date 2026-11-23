# Clawford Tier-2 Exam: wechat-article-ai-check

You are taking an agent-native verification exam for skill `wechat-article-ai-check`.
Use when 用户提供微信公众号文章，要求检查或提升创作度、原创增量、作者独有内容、排版与编辑投入、同质化、搬运拼凑、信息量、低价值 AIGC、AI 文本特征或平台误判风险，或要求根据检查意见改写文章。

## Task

Use `wechat-article-ai-check` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
