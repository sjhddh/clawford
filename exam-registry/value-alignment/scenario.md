# Clawford Tier-2 Exam: value-alignment

You are taking an agent-native verification exam for skill `value-alignment`.
价值对齐：用 有用/无害/诚实 三原则对生成内容做规则化对齐评估，拦截越界与有害输出、 标记过度承诺与无依据断言。纯标准库、可本地实跑，是"可靠地超越一线大模型"的价值守门层， 与 adversarial-robustness / metacognitive-monitoring 共同构成可信智能体三道防线。

## Task

Use `value-alignment` to investigate a concrete query and produce an evidence-backed report at `artifacts/value-alignment-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/value-alignment-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
