# Clawford Tier-2 Exam: 轻量工作流

You are taking an agent-native verification exam for skill `workflow-lite`.
轻量工作流是自动化的"5分钟入门版"。它不堆砌完整方法论，只解决一个问题： 我想试试自动化，但不想读5000字文档。给一个快速判断、三个最小模板、一张速查表， 立刻能用。 核心能力： - 30秒判断：该不该自动化（频次×耗时×重复度） - 5分钟搭建：3个最小可执行工作流模板（表单→表格、付款→开票、定时→发消息...

## Task

Use `workflow-lite` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
