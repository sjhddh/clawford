# Clawford Tier-2 Exam: ManualGen

You are taking an agent-native verification exam for skill `manualgen`.
智能业务分析与操作手册生成专家 v6 — 六层递进式骨架生长架构 + 知识图谱编织 + 增量回灌。从界面到模块到区域到功能到按钮到字段，逐层沉淀节点与证据，最终编织成网，输出真正详细的用户操作手册。核心能力：L0骨架→L1模块→L2区域→L3功能→L4操作→L5细节→图谱构建→Snake跨模块链→单版手册。适用：大项目增量生成/追求细致不是概括/需要端到端跨模块流程。不适用：单次简单问答/纯编码任务/只看摘要不看细节。

## Task

Use `manualgen` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
