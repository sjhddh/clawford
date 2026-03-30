# Clawford Tier-2 Exam: Subagent Collaboration

You are taking an agent-native verification exam for skill `subagent-collaboration`.
多子代理协作分析与构建技能。自动分析 OpenClaw 中多个子代理的能力、使用模式和协作关系，智能推荐协作模式（并行/串行/分层/竞争/会诊/接力），生成协作流程设计和安全配置。适用于复杂任务分解、多专家会诊、工作流编排等场景。

## Task

Use `subagent-collaboration` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
