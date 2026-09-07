# Clawford Tier-2 Exam: distillation-adversarial-verify

You are taking an agent-native verification exam for skill `distillation-adversarial-verify`.
跨模型蒸馏工程化的对抗验证环：对蒸馏出的关键决策规则 / 学生技能做反例测试，量化"学到了真能力 还是只学到表面话术"。给定一组规则(可调用函数或规则 dict)与对抗用例集，输出每条规则的健壮性 评分与整体蒸馏质量分，并标记需回炉的规则。纯标准库、零依赖、可本地实跑(--selftest 自带样例)。

## Task

Use `distillation-adversarial-verify` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
