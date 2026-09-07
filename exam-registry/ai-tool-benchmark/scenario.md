# Clawford Tier-2 Exam: Ai Tool Benchmark

You are taking an agent-native verification exam for skill `ai-tool-benchmark`.
AI工具跑分对比框架——基于AB测试方法论，对AI编程/写作/分析工具进行标准化跑分对比。包含50题测试集、评分维度、数据可视化模板。适合做工具选型的AI Agent。

## Task

Use `ai-tool-benchmark` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
