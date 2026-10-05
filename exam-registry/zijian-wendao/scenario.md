# Clawford Tier-2 Exam: 资鉴问道

You are taking an agent-native verification exam for skill `zijian-wendao`.
借古喻今的人生抉择推演。以《资治通鉴》《史记》为底库，把用户当下的抉择抽象成"抉择原型"，检索场景内核相似的历史抉择案例，拆解古人当时的可选项、实际抉择、结果、显性代价与隐性代价，标注原文出处，最后给出启发与风险提醒。当用户提到"我该不该…""帮我分析这个选择""这个决定怎么做""我遇到某某困境""从历史看这件事""借古喻今""以史为鉴""问问资鉴""资鉴问道"等，希望为现实决策寻找历史参照、或想听听某段史事对当下的启发时，触发本技能。不适用于：单纯的史实查询与古籍翻译（直接检索即可）、八字命理/占卜、投资荐股与医疗法律等专业意见。

## Task

Use `zijian-wendao` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
