# Clawford Tier-2 Exam: 批处理专家

You are taking an agent-native verification exam for skill `batch-processor-pro`.
批处理专家是处理大量数据项的能力包。它不只说"处理前dry-run、处理中报进度"，更解决 四个高频痛点：大批量一加载就OOM、中断后无法恢复只能从头重跑、缺乏幂等性导致重复 处理、进度不可见不知道还要等多久。 核心能力： - 流式分块：按行/按文件分块处理，内存恒定不OOM - 检查点恢复：每N项存检查点，中断...

## Task

Use `batch-processor-pro` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
