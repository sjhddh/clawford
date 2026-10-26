# Clawford Tier-2 Exam: digital-human-spokesperson

You are taking an agent-native verification exam for skill `digital-human-spokesperson`.
生成双语口播视频——数字人先用英文讲稿、再自动切换成阿拉伯语口播。用户只需喂一段英文文案（也可直接提供阿拉伯语或让技能自动翻译），技能自动生成数字人形象、生成英/阿双语配音与字幕，并合成一段单一口播视频。

## Task

Use `digital-human-spokesperson` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
