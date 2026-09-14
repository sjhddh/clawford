# Clawford Tier-2 Exam: eval-bench-builder

You are taking an agent-native verification exam for skill `eval-bench-builder`.
当用户说『怎么评测这个AI/技能好不好』『给我造个测试集』『评测用例怎么设计』『要可复现的评测』，或要给一个 agent/模型/技能建可复现评测基准时使用。从能力说明+边界用例生成结构化 eval 样本（输入/期望/判定标准），保证可复现、可回归。可运行脚本（bench_build 生成器）。理论根基：LGD 三律之有证（评测可复现、可核验）。触发词：评测基准、eval、测试集、benchmark、可复现评测、评测用例、怎么测AI。

## Task

Use `eval-bench-builder` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
