# Clawford Tier-2 Exam: se-semantic-graph

You are taking an agent-native verification exam for skill `se-semantic-graph`.
软件工程语义图谱——把项目全知识域（客户画像/需求/成本/架构/分层/模块运行逻辑/历史决策）落进 axolotl 图库，修 bug/加功能/重构时沿跨域语义边定向查询精确上下文，根治上下文爆炸与注意力分散。触发词：项目语义图谱、修 bug 前查上下文、这段代码为什么存在、功能来源、为何这么设计、影响面查询。

## Task

Use `se-semantic-graph` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
