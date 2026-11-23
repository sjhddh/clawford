# Clawford Tier-2 Exam: gtrk 解说视频创作

You are taking an agent-native verification exam for skill `gtrk-narration`.
通用解说视频创作图纸（解说链正本）——把「一个很长的东西」（旅行素材夹/影视长片/游戏实况/探店与做饭流程记录）提炼梗概、高光与看点，用精简叙述重讲成一条解说成片工程。判据=素材语料自带叙事时序且成片尊重它；声音基座无关（TTS 配音 / 用户自己念的口播毛片皆可，稿可 AI 代写可自备）。当用户想「做影视解说 / 游戏解说 / 探店解说 / 做饭流程解说 / 把这段素材讲成一条片 / 解说视频 / 把这部片子讲一遍」时使用本图纸。旅拍解说（gtrk-travel-recap）是本链先行垂类实例。凡解说类成片，优先用本图纸编排，别直接裸跑零件。

## Task

Use `gtrk-narration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
