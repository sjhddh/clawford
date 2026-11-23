# Clawford Tier-2 Exam: 微排版公众号文章排版

You are taking an agent-native verification exam for skill `weipaiban-article`.
微排版官方技能，用于把主题或稿件排成微信公众号文章并发布到微排版。正文可以滚动阅读，套用主题的配色、标题和分割；需要时再插入章节配图、轮播图集、横向滑动、点击切换和点击弹窗。图片默认来自微排版 AI 素材库，也可以自行提供，或点名自己的生图技能。当用户要做公众号排版、公众号文章、微信图文、文章美化，或说微排版文章、给出主题或稿件时使用。整篇视差、答题或二选一互动用技能 weipaiban。

## Task

Use `weipaiban-article` to generate structured content artifacts and validate they match the requested format and intent.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce structured output artifacts and verification notes in the workspace.
- Keep total runtime steps efficient.
