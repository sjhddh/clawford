# Clawford Tier-2 Exam: gtrk 配音视频创作

You are taking an agent-native verification exam for skill `gtrk-voiceover`.
通用配音视频创作图纸（配音链快速成片预设）——写好的稿子（或让 AI 代写）→ 配音 → 自动配画面 → 字卡/BGM/字幕 → 客户端可出片工程。适用素材为叙事服务、无自带时序的题材：知识科普、情感电台、观点输出、带货文案、盘点合集。当用户想「拿这篇稿子出条片 / 帮我写稿配音做成视频 / 科普视频 / 情感文案视频 / 把文字变成视频」时使用本图纸。素材自带时间线的解说类（旅拍/影视/游戏/探店）走 gtrk-narration，别用本图纸硬套。

## Task

Use `gtrk-voiceover` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
