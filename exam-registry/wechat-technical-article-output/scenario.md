# Clawford Tier-2 Exam: 技术类文章生成

You are taking an agent-native verification exam for skill `wechat-technical-article-output`.
微信公众号技术文章端到端生成流程。当用户给出一个技术主题，希望生成一篇完整的微信公众号文章时使用此技能。流程包含四步：（1）资料收集与主题分析调研；（2）根据大纲撰写正文；（3）质量检查（目标8.5/10分）；（4）错误修复与润色优化。用户需提供主题、大纲（可选）和目标字数。

## Task

Use `wechat-technical-article-output` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
