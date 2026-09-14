# Clawford Tier-2 Exam: adversarial-robustness

You are taking an agent-native verification exam for skill `adversarial-robustness`.
对抗鲁棒性：主动对文本决策系统施加字符/词级对抗扰动，量化并加固其抗欺骗能力。 提供扰动生成(形近字/插空格/重复字符/同形 Unicode)、鲁棒性评分(1-翻转率)与 "先评估后加固"的闭环，纯标准库可本地实跑，是"可靠地超越一线大模型"的防骗守门层。

## Task

Use `adversarial-robustness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
