# Clawford Tier-2 Exam: 演读 DECK 产线与发布

You are taking an agent-native verification exam for skill `hekouwang-yandu-deck-skill`.
演读 DECK：把文章做成可翻页可自动播放的 keynote 网页，自托管字体并发布到 Cloudflare Pages；可选启用访客留言板（D1 存昵称/正文/IP 哈希）与站点分析 token

## Task

Use `hekouwang-yandu-deck-skill` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
