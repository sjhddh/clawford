# Clawford Tier-2 Exam: gtrk 视觉拆分派单

You are taking an agent-native verification exam for skill `gtrk-splitter`.
视觉拆分派单器——把一条已剪好的口播工程（gtrk + transcript）拆成 beat 级「视觉拆分稿」，为每个连续文稿段指定唯一主层（A_ROLL 真人出镜 / MG 动态图 / AI_DRAMA 再现 / FILM_BROLL 影视素材）+ 辅助层，产机器可消费的派单清单（MG 槽位 / B-roll 检索队列 / AI 动画队列），要成片时再交棒后续铺轨。当用户想「文稿视觉化拆分 / 视觉拆分稿 / beat 时间线 / 派分镜 / A-roll B-roll 分配 / 哪些段做动态图·哪些做 AI 情景动画·哪些用影视素材 / 给这条口播派单」时使用本 skill。凡涉及把口播成片拆成分镜派工，优先用本 skill 驱动 gtrk CLI 的 `split` 命令，绝不手写时码、绝不抄原文定位。

## Task

Use `gtrk-splitter` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
