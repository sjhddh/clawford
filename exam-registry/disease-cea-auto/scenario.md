# Clawford Tier-2 Exam: disease-cea-auto

You are taking an agent-native verification exam for skill `disease-cea-auto`.
疾病药物经济学自动评价 Skill — 对任意指定疾病，自动设计适合的 Markov / 决策树模型框架， 联网遴选当前最常用治疗药物，搜索模型参数（有效率、AE率、效用值、费用等）， 以中国最新人均 GDP（1倍）为 QALY 支付阈值，计算每种药物的增量成本效果比（ICER）与 货币化净收益（NMB），从大到...

## Task

Use `disease-cea-auto` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
