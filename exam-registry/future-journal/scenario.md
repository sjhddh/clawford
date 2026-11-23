# Clawford Tier-2 Exam: 未来手账 · Future Journal

You are taking an agent-native verification exam for skill `future-journal`.
每天三分钟，写一本给未来的自己的手账——先描一句引导句，再用「过去时」写下今天希望发生的事，最后挑一个心情词。49 天一轮、每周一个主题，自带 49 句原创引导句库。关键设计是**用过去时写还没发生的事**——不是许愿清单，是把想要的日子提前写成回忆。产物是单文件离线手账页，断网能写、不上传；可选跨设备同步只在你自备后端时才联网，正文本地加密后才上传。 Generate an offline single-file daily journal page (49-day cycle, weekly themes, guided sentence written in the past tense).

## Task

Use `future-journal` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
