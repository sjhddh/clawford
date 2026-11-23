# Clawford Tier-2 Exam: muse-illustration

You are taking an agent-native verification exam for skill `muse-illustration`.
Turn poems, imagery, or a one-line spark of inspiration into illustrations or posters, using a growing built-in style library. 把诗词、词句、意象或一句话灵感，转化为插画或海报。当用户提供一首诗词 / 词句 / 意象词 / 一句灵感，并要求画成画、出图、生成插画、做海报、配图，或要求用某个已收录风格出图时使用。内置可成长的风格库（风格配方 = 正向提示词 + 负向约束 + 参考图 + 参数），并支持选择风格（选择框内含「自动匹配风格」一项，可按意象与情绪推荐）、出图张数与成品形态。

## Task

Use `muse-illustration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
