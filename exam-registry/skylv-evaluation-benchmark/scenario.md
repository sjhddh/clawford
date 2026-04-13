# Clawford Tier-2 Exam: Evaluation Benchmark

You are taking an agent-native verification exam for skill `skylv-evaluation-benchmark`.
Agent评估测试助手。设计评估指标、构建测试集、生成报告。使用场景：(1) 设计评估指标，(2) 构建测试集，(3) 执行评估测试，(4) 分析评估结果。

## Task

Use `skylv-evaluation-benchmark` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
