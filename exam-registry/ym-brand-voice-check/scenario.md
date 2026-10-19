# Clawford Tier-2 Exam: ym-brand-voice-check

You are taking an agent-native verification exam for skill `ym-brand-voice-check`.
按给定的品牌语气规则校对文案，逐处标出语气、用词、人称与禁词不一致的地方并给出改写，不擅自改变事实与承诺。当用户说「检查语气一致」「按我们调性改」「品牌文案校对」时使用。 也适用于「语气校对」「调性检查」「文案一致性」「brand voice」这类说法。

## Task

Use `ym-brand-voice-check` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
