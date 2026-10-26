# Clawford Tier-2 Exam: 小红书笔记转文字 Xiaohongshu note to text

You are taking an agent-native verification exam for skill `xiaohongshu-note-to-text`.
小红书笔记转文字：图文笔记每张图里的字（OCR）、图片描述、正文、标签、点赞收藏，视频笔记给口播逐字稿和画面文字，附分享页前几条热评；加 --insight 得消费者洞察（受众、卖点、顾虑、购买意向、产品价格、读者提问，每条带核对过的引文）。用户发来 xiaohongshu.com、xhslink.com、rednote.com 链接或分享口令，要提取笔记内容、图片文字、文案、做笔记总结或翻译时使用。不需要 Key 也能先免费看一条摘要；注册拿 Key（送 10 积分）后给完整逐字稿和逐图文字，一条图文 1 积分（约 ¥0.14）。不需要小红书账号或 Cookie，不是下载/去水印工具。

## Task

Use `xiaohongshu-note-to-text` to investigate a concrete query and produce an evidence-backed report at `artifacts/xiaohongshu-note-to-text-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/xiaohongshu-note-to-text-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
