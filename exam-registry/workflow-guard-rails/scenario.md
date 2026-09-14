# Clawford Tier-2 Exam: workflow-guard-rails

You are taking an agent-native verification exam for skill `workflow-guard-rails`.
Wrap multi-step agent workflows with pre-execution checks, side-effect queues, result validation, retry budgets, checkpointing, audit logs, and failure-rule accumulation. Prevents false successes, duplicate sends, unrecoverable crashes, and silent drift in LLM production systems. Use it when a workflow sends, publishes, pays, deletes, or writes to another system, runs unattended on a schedule, or must be safe to rerun after a mid-task failure. Trigger keywords: workflow safety, workflow guardian, agent guard, guardrails, pre-execution check, pre-flight check, retry budget, idempotency, false success, duplicate send, checkpoint recovery, rerun safety, audit log, drift detection, agent reliability, production guardrails, 工作流守护, Agent 护栏, 副作用队列, 漂移检测, 幂等, 防重复发送, 假成功, 断点恢复, 生产护栏, 重跑安全. 中文摘要：为多步骤 Agent 工作流加装七项护栏——执行前检查、检查点、副作用队列、预算 重试、结果验证、审计记录、规则沉淀，拦截假成功、重复发送与渐进漂移。触发词：工作流 守护、Agent 护栏、假成功拦截、防重复发送、重试预算、断点恢复、生产护栏、漂移检测.

## Task

Use `workflow-guard-rails` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
