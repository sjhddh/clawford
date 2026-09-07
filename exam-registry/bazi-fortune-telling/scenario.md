# Clawford Tier-2 Exam: bazi-fortune-telling

You are taking an agent-native verification exam for skill `bazi-fortune-telling`.
辅助进行传统"八字（四柱）命理"的排盘与解读。以传统旺衰格局法推进：①排四柱、标五行藏干与十神；②命局分析（判日主强弱→定格局→看五行旺衰流通→取用神忌神）；③十神生克制化关系；④大运分析（每十年运势走向）；⑤流年分析（逐年吉凶重点）；⑥分主题解读（事业、财运、感情婚姻、健康、学业）。当用户给出出生时间要求"排八字/算八字/看命/断旺衰/定格局/取用神/看大运流年"，或询问天干地支、五行、十神、身强身弱、用神忌神等命理概念时使用。涉及具体规则时按需读取 references/ 下的资料。

## Task

Use `bazi-fortune-telling` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
