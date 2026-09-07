# Clawford Tier-2 Exam: FDE Harness

You are taking an agent-native verification exam for skill `sofagent`.
FDE Skill——帮 FDE（前线部署工程师）更好完成企业 AI 落地的方法论 Skill。约束 Agent 行为、审计每次变更、沉淀经验。 底层实现叫约束层——一个层五种能力：注入·审计·回溯·沉淀·进化。FORGE 自迭代工具链是内部开发工具。 内置持续优化模式（sustain），自动读 audit 报告趋势生成优化报告。

## Task

Use `sofagent` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
