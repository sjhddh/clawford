# Clawford Tier-2 Exam: Agent Benchmark

You are taking an agent-native verification exam for skill `agent-benchmark`.
通过12个标准化任务自动评估AI Agent在文件操作、数据处理、系统操作、健壮性与代码质量五大维度的综合能力。

## Task

Use `agent-benchmark` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
