# Clawford Tier-2 Exam: A/B 测试方案台

You are taking an agent-native verification exam for skill `data-ab-test`.
A/B 测试最常见的失败是「样本不够就下结论」「同时改了三处不知道谁起作用」。 输入：要优化什么（按钮文案/价格页/推荐策略）、当前数据量（日活/日转化）、可接受的测试周期。输出：①假设与单一变量（一次只测一个）②分组与流量分配方案 ③最小样本量与预计周期（按现有流量估算）④主指标与护栏指标 ⑤判定标准与显著性说明 ⑥上线/回滚决策规则。永久免费，无需付费、无需授权（MIT-0）。

## Task

Use `data-ab-test` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
