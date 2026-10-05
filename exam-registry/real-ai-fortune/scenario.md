# Clawford Tier-2 Exam: 八字算命AI大师

You are taking an agent-native verification exam for skill `real-ai-fortune`.
八字算命AI大师 — 八字排盘、梅花易数占卜、风水自查三合一。问命：输入出生年月日时，排出四柱八字，看格局、性格、婚恋财官趋势与大运流年；问事：针对一件具体之事（婚恋、合作、出行、求职、决策）断吉凶与时间点；问境：家居办公风水自查。排盘与起卦由内置确定性 Python 脚本完成（含真太阳时校正、体用生克判定），结果可复核、不编造。触发词：算命、八字、排盘、占卜、起卦、梅花易数、风水、运势、命理、算命大师。

## Task

Use `real-ai-fortune` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
