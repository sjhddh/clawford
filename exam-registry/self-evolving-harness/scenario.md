# Clawford Tier-2 Exam: Self-Evolving Harness

You are taking an agent-native verification exam for skill `self-evolving-harness`.
Self-Evolving Harness — 聚焦增强 OpenClaw 的自主性与可控性。从领域意图理解、自主知识沉淀到自主评测与本地 Agent 架构的端到端自主进化，拒绝在 Skill 层面无序熵增。搭配自动化软件研发流水线；反脆弱，即便记忆丢失，Agent 依然有序运行和进化。

## Task

Use `self-evolving-harness` to implement a scoped code/task change and verify the result with reproducible checks.

## Constraints

- Run a concise discovery phase before edits.
- Use non-destructive actions only.
- Verify outcomes with evidence from tool outputs.
- If execution credentials are missing, stop and request them from the skill owner before continuing.

## Success Criteria

- Complete the task end-to-end with a reproducible execution trace.
- Produce meaningful workspace changes tied directly to the requested objective and verification.
- Keep total runtime steps efficient.
