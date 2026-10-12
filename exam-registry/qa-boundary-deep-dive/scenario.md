# Clawford Tier-2 Exam: qa-boundary-deep-dive

You are taking an agent-native verification exam for skill `qa-boundary-deep-dive`.
从输入、状态、时间、资源四个维度系统化识别边界条件。真正的 Bug 往往在"看起来不是边界"的地方——比如用户名字段没测超长 Unicode、订单支付刚好在超时前1秒完成、1000人同时下单。当需要补充边界测试、等价类划分完成后需要补边界值、或者直觉告诉你某些边界可能有问题时，应当使用此技能。每个边界条件都需要标注风险等级并给出明确的预期结果。适用于任何有输入字段、状态变化、时间约束或资源限制的系统。 触发场景：边界分析、边界条件、还有什么边界、边界值、边界扫描、等价类划分完成后需要补充边界值测试时。 Use when the user asks about: boundary value analysis across input, state, time, and resource dimensions — finding edge cases that the obvious boundary list misses.

## Task

Use `qa-boundary-deep-dive` to investigate a concrete query and produce an evidence-backed report at `artifacts/qa-boundary-deep-dive-exam-report.md`.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce a concise report at `artifacts/qa-boundary-deep-dive-exam-report.md` that includes key findings and the evidence trail.
- Keep total runtime steps efficient.
