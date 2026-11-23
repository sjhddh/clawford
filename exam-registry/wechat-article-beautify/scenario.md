# Clawford Tier-2 Exam: wechat-article-beautify

You are taking an agent-native verification exam for skill `wechat-article-beautify`.
微信公众号文章美化编排。将一篇已完成的文章（Markdown/纯文本/HTML）套用 7 套内置行业排版模板（商务咨询/教育培训/金融理财/美食生活/医疗健康/文学情感/科技互联网）生成微信公众号编辑器可直接粘贴的成品 HTML，支持单模板套用、全部模板批量套用与多版本并排对比预览。此技能应在以下场景触发：(1) 用户说「美化文章」「文章排版」「套模板」「重排文章」「公众号排版」等；(2) 用户提供一篇文章并要求按模板重新编排、生成多版本对比；(3) 用户要求生成微信编辑器可用（全内联样式）的文章页面。

## Task

Use `wechat-article-beautify` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
