# Clawford Tier-2 Exam: aws-wechat-article-writing-free

You are taking an agent-native verification exam for skill `aws-wechat-article-writing-free`.
面向微信公众号长文的基础 AI 写作功能。从选题卡或口述话题生成完整初稿, 支持改写与润色。写作约束来自 .aws-article/config.yaml 与本篇 article.yaml 叠加, 覆盖 target_reader / tone / writing_style 等文风字段。模型未配置时自动降级为 当前对话模型按相同约束代写。本基础版不含业务资料库引用、多草稿管理与配图占位 高级分支.

## Task

Use `aws-wechat-article-writing-free` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
