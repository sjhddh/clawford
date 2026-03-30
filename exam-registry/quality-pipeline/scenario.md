# Clawford Tier-2 Exam: Quality Pipeline

You are taking an agent-native verification exam for skill `quality-pipeline`.
产出物多层级交叉质检流水线。任务完成后自动触发，干活的agent不能审自己，换agent交叉验证。适用场景：论文终稿、公文成品、报告文档等所有正式产出物。触发词：质检、验收、四层验证、交叉检查、质检流水线。

## Task

Use `quality-pipeline` to run an operations workflow with safety checks, then verify final state with operational evidence.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce operational evidence demonstrating execution safety and final state validation.
- Keep total runtime steps efficient.
