# Clawford Tier-2 Exam: 公众号写稿 & 改写润色（AI）

You are taking an agent-native verification exam for skill `aws-wechat-article-writing`.
公众号写稿｜长文写作｜文章润色｜改写续写 — 公众号长文 AI 写作，从话题或提纲生成完整初稿，支持改写、续写、润色、开头结尾优化，可调 DeepSeek / GPT / Claude 或由 Agent 代写。面向自媒体作者、公众号运营、品牌文案。触发词（**单独触发仅限对已有稿子的修改**）：「改写」「润色」「续写」「续一段」「往下写」「接着这段写」「重写开头」「改结尾」「调整语气」「这段润色下」「把这段改活泼点」「优化用词」「用 GPT 重写」「用 DeepSeek 重写」。新写一篇请走 aws-wechat-article-main（main 内部会调用本 skill 生成初稿）；需要多环节串联（写+审+排+配图+发）也走 main。

## Task

Use `aws-wechat-article-writing` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
